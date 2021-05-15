(function (){
          "use strict",
      document.addEventListener('DOMContentLoaded', function(){

            
            /* Menu Responsive */

            
          

          });
          
})();



function cambiarClase(){
  let siteNav = document.getElementById('navegacion');
    siteNav.classList.toggle('site-nav-open');
  let menuOpen = document.getElementById('mobile-menu');
    menuOpen.classList.toggle('menu-open');
}

// cambiarClase();


/** Nav Bar fija al hacer scroll */
window.onscroll = function() {myFunction()};

var navbar = document.getElementById('nav-barra');
var sticky = navbar.offsetTop;
var logo = document.getElementById('logo');



function myFunction(){

if(window.scrollY > sticky) {
  navbar.classList.add("sticky");
} else {
  navbar.classList.remove("sticky");
}


// window.addEventListener('scroll', function(){
//   let navbar = document.querySelector('.nav-barra');
//   navbar.classList.toggle('sticky', window.scrollY > 0);return false;
// });

let scroll = window.scrollY;

if(scroll > 200){
  logo.classList.remove("ocultar")
  logo.classList.add("mostrar")
} else {
  logo.classList.add("ocultar")
  logo.classList.remove("mostrar")
}
return false;
}




