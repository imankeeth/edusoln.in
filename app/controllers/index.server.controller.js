exports.render = function ( req, res ) {
  if ( res.session.lastVisit ) {
    console.log( res.session.lastVisit );
  }
  res.session.lastVisit = new Date();
  res.render( 'index', {
    title: 'Welcome to Edusoln.in'
  } );
}
