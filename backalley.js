#! /usr/bin/env node

var program = require('commander');
var youtube = require('youtube-feeds');
var pJSON = require(__dirname + '/package.json');

program
.version(pJSON.version)
.usage('[options] <username> <playlist>')
.parse(process.argv);

var username = program.args[0];
var playlistUrlPrefix = 'https://www.youtube.com/playlist?list=';
var playlistUrls = [];

youtube.user(username).playlists(function (err, playlists){
  console.log('The playlists:\n');
  playlists.items.forEach(function (playlist) {
    playlistUrls.push(playlistUrlPrefix + playlist.id);
  });
});
