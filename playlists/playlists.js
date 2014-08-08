var youtube = require('youtube-feeds');

var playlistMethods = module.exports = {
  get: function (username, callback) {
         var playlistUrlPrefix = 'https://www.youtube.com/playlist?list=';

         youtube.user(username).playlists(function (err, playlists){
           var playlistUrls = [];
           playlists.items.forEach(function (playlist) {
             playlistUrls.push({
               'title' : playlist.title,
               'url' : playlistUrlPrefix + playlist.id
             });
           });
           return callback(playlistUrls);
         });
       },
  show: function (username) {
          console.log('Playlists for user ' + username + ':');
          playlistMethods.get(username, console.log);
        },
  dl: function (username, extract) {
        var separator = '\t';
        console.log('extract: ' + extract);
        playlistMethods.get(username, function (playlists) {
          console.log('#' + separator + 'Playlist');
          console.log('-' + separator + '--------');
          for (var i = 0; i < playlists.length ; i++) {
            console.log(i + ')' + separator + playlists[i].title);
          }
          console.log('\nSelect a playlist to download: ');
        });
      }
}
