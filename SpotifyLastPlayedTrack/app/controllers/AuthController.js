/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   AuthController.js                                .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: Snkh <inquiries@snkh.me>                   +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2019/08/18 09:56:43 by Snkh         #+#   ##    ##    #+#       */
/*   Updated: 2019/08/18 12:51:08 by Snkh        ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    redirectUri: config.host + '/callback'
});

module.exports = {

    login: function (req, res) {
        res.redirect(spotifyApi.createAuthorizeURL(config.scopes, 'state', true));  
    },

    callback: function (req, res) {
        if (req.query.code === undefined)
            return res.status(400).json({status: false, error: 'Missing code.'})

        spotifyApi
            .authorizationCodeGrant(req.query.code)
            .then(function(data) {
                spotifyApi.setAccessToken(data.body['access_token']);
                return spotifyApi.getMyRecentlyPlayedTracks();
            })
            .then(function (data) {
                var items = data.body.items;
                var rsp = [];

                items.forEach(function(it, index){
                    rsp.push('<br>' + (index + 1) + '. ' + it.track.name + ' tirer de l\'album ' + it.track.album.name + ' de ' + it.track.artists[0].name)
                })
                res.send('<h1>Last played song: </h1>' + rsp)
            })
            .catch(function(err) {
                console.log('Something went wrong', err.message);
            });
    }
}