var express = require( 'express' ),
  morgan = require( 'morgan' ),
  compression = require( 'compression' ),
  bodyParser = require( 'body-parser' ),
  methodOverride = require( 'method-override' ),
  config = require( './config' );

module.export = function () {
  var app = express();
  if ( process.env.NODE_ENV === 'development' ) {
    app.use( morgan( 'dev' ) );
  } else if ( process.env.NODE_ENV === 'development' ) {
    app.use( compression() );
  }
  app.use( bodyParser.urlencoded( {
    extended: true
  } ) );
  app.use( bodyParser.json() );
  app.use( methodOverride() );
  app.use( session( {
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  } ) );

  app.set( 'views', './public/views' );
  app.set( 'view engine', 'ejs' );

  require( '../app/routes/index.server.routes.js' )( app );

  app.use( express.static( './public' ) );
  return app;
}
