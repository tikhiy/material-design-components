;( ( window, undefined ) => {

'use strict';

if ( 'ontouchend' in window == false ) {
  document.body.classList.remove( 'touchable' );
}

const listener = function ( event ) {
  if ( this.classList.contains( 'disabled' ) ) {
    event.preventDefault();
  }
};

for ( let button of document.getElementsByTagName( 'button' ) ) {
  button.addEventListener( 'click', listener, false );
}

} )( this );