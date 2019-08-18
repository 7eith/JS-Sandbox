/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   global.js                                        .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: Snkh <inquiries@snkh.me>                   +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2019/08/18 10:27:19 by Snkh         #+#   ##    ##    #+#       */
/*   Updated: 2019/08/18 12:50:46 by Snkh        ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

module.exports = {
  
  /** 
  * Hostname of the application
  * default: localhost (change this, the SpotifyAPI not working with Localhost)
  */
 
  hostname: process.env.HOSTNAME || 'localhost',
  
  /**
  * Running port of this application
  * default: 8000
  */
  
  port: process.env.PORT || 8000,
  
  /**
  * Spotify Client ID
  * default: hide.
  */
  
  clientId: process.env.SPOTIFY_CLIENT_ID || null,
  
  /**
  * Spotify Client Secret
  * default: hide.
  */
  
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || null,
  
  /**
  * Scopes for Spotify
  * default: user-read-private, user-read-email, user-read-recently-played
  */
  
  scopes: ['user-read-recently-played'],
}
