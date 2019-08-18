# SpotifyLastPlayedTrack
Fetch last song played on Spotify

# Why? 
Desoler pour les fautes (clavier qwerty sans accent et manque d'envie de faire une dictee) <br>
J'avais envie de m'amuser un peu avec NodeJS, l'API de Spotify et ExpressJS tout en apprenant a mieux gerer ces technologies. <br>
Pour le moment, c'est la beta du projet, streamstats, souhaitant reproduire un site permettant de partager ses dernieres ecoutes sur Spotify a ses amis.

# How to use
```shell
git clone https://github.com/iSnkh/JS-Sandbox
cd JS-Sandbox/SpotifyLastPlayedTrack
npm install
mv .env.example .env
```
Pour pouvoir utiliser ce projet, il vous faut une application sur Spotify, pour avoir le secretId et le clientId, il vous faudra aussi une url accessible par Spotify. <br>
Ensuite il suffit juste de remplir le .env, avec votre clientId et le secretId et le hostname, vous pouvez changer le port via la variable d'environnement "PORT", par default le port est 8000 <br>
Pour l'hostname, il faut qu'il sois accessible, et whitelist dans votre applications, par example localhost ne marche pas, car uniquement vous y avez acces et pas les api de Spotify (cela est necessaire pour avoir acces aux callback de Spotify).<br>

## PS: 
C'est le tout premier "vrai" projet que je met sur Github qui marche en JS et j'voulais garder ca quelque part ou il disparaitra pas pour voir mon changement de niveaux d'ici 1 mois a pratiquer le JS. <br>
Il y'a surement plein d'erreur qui s'balade, c'est pas beau mais c'est fonctionnel en tout cas pour moi vu que j'voulais juste avoir ca.