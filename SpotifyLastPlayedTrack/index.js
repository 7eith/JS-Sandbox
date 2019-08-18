/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   index.js                                         .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: Snkh <inquiries@snkh.me>                   +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2019/08/15 23:43:01 by Snkh         #+#   ##    ##    #+#       */
/*   Updated: 2019/08/18 12:49:44 by Snkh        ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

require('dotenv').config()

const express = require('express')
const app = express()

// Configuration
global.config = require('./app/config/global')
global.config.host = config.hostname + ':' + config.port

// Router
var routes = require('./app/routes')
for (var route in routes) {
  if (route.split(' ').length > 1) {
    var method = route.split(' ')[0]
    var url = route.split(' ')[1]
  } else {
    var method = 'get'
    var url = route
  }

  if (typeof routes[route] === 'string') { 
    var controller = routes[route].split('.')[0]
    var action = routes[route].split('.')[1]
  } else { // protected
    var controller = routes[route].function.split('.')[0]
    var action = routes[route].function.split('.')[1]

    if (routes[route].protected) {
      app[method](url, auth, require('./app/controllers/' + controller)[action])
      continue
    }
  }

  app[method](url, require('./app/controllers/' + controller)[action])
}

app.listen(config.port, function () {
  console.log('[SpotifyLastPlayed] Running on ' + config.host)
})