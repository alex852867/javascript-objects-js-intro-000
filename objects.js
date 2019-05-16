var playlist = {Jayz : 'Girls'}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, {[artistName]: songTitle})
}
