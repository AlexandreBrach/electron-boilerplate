
var remote = require('electron').remote
var args = remote.getGlobal('cliArgs');

document.write( JSON.stringify( args ) )
