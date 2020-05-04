window.onload = function(){
  // seleccionar elementos de la clase .cuadros
  let iconos = document.querySelectorAll(".redes_ico");
  // recorrer los elementos por si son mas de uno
  iconos.forEach(function(ico){
    // agregar un evento para entrada de mouse
    ico.addEventListener('mouseover',function(ev){
      ico.classList.add('heartBeat','pulse');

    });
    // agregar un evento para salida de mouse
      ico.addEventListener('mouseout',function(ev){
      ico.classList.remove('heartBeat','pulse','bounceInRight');
    });
  });
}
