var express = require( './config/express' )();

express.listen( 3000 );
module.exports = express;

console.log( 'Server running on http://localhost:3000/' );
