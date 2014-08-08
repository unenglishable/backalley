var playlists = require(__dirname + '/playlists');
module.exports = {
  show: function (username) {
          playlists.show(username);
        },
  dl: function (username, extract) {
         playlists.dl(username, extract);
       }
}
