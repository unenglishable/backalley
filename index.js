var path = require('path');
var pJSON = require(__dirname + '/package.json');
var program = require('commander');

program
  .version(pJSON.version)
  .option('-s, --show <username>', 'Show playlists for a user')
  .option('-i, --interactive <username>', 'Select a user\'s playlist to download')
  .option('-d, --download <URL>', 'Download a video or playlist by URL')
  .option('-x, --extract', 'Extract audio to iTunes')
  .parse(process.argv);

var playlists = require(path.join(__dirname, 'playlists'));

if (program.show) {
  playlists.show(program.show);
}
else if (program.interactive) {
  playlists.dl(program.interactive, program.extract);
}
