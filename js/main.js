/* Funciones para abrir modales */

var botonModal = document.getElementsByClassName("btn");
var modal = document.getElementsByClassName("modal");
var fondoModal = document.getElementsByClassName("modal-overlay");

botonModal[0].addEventListener("click", function () {
  fondoModal[0].style.display = "flex";
  modal[0].style.display = "block";
  modal[1].style.display = "none";
  modal[2].style.display = "none";
  modal[3].style.display = "none";
});

botonModal[1].addEventListener("click", function () {
  fondoModal[1].style.display = "flex";
  modal[1].style.display = "block";
  modal[0].style.display = "none";
  modal[2].style.display = "none";
  modal[3].style.display = "none";
});

botonModal[2].addEventListener("click", function () {
  fondoModal[2].style.display = "flex";
  modal[2].style.display = "block";
  modal[0].style.display = "none";
  modal[1].style.display = "none";
  modal[3].style.display = "none";
});

botonModal[3].addEventListener("click", function () {
  fondoModal[3].style.display = "flex";
  modal[3].style.display = "block";
  modal[0].style.display = "none";
  modal[1].style.display = "none";
  modal[2].style.display = "none";

});

/* Funciones para publicar... */

/* ...texto */

var areaTitulo = document.getElementById("modal-chat-title");
var areaMensaje = document.getElementById("modal-chat-message");
var areaPublicacion = document.getElementById("main");
var botonPublicar = document.getElementsByClassName("publicar");

botonPublicar[0].addEventListener("click", function () {
  var titulo = areaTitulo.value;
  var mensaje = areaMensaje.value;
  var h5 = document.createElement("h5");
  h5.textContent = titulo;
  var parrafo = document.createElement("p");
  parrafo.textContent = mensaje;
  areaPublicacion.appendChild(h5);
  areaPublicacion.appendChild(parrafo);
  areaTitulo.value = " ";
  areaMensaje.value = " ";
  fondoModal[0].style.display = "none";
  modal[0].style.display = "none";
});


/* ...imágen */
/* API file*/

var areaTituloImg = document.getElementById("modal-image-title");
var usuarioImagen = document.getElementById("image-file");

botonPublicar[1].addEventListener("click", function (e) {
  var tituloImg = areaTituloImg.value;
  var h5 = document.createElement("h5");
  h5.textContent = tituloImg;
  var reader = new FileReader();
  reader.readAsDataURL(usuarioImagen.files[0]);

  reader.onload = function () {
    
    var imagen = new Image();
    imagen.src = reader.result;
    imagen.classList.add("image-responsive", "col", "s12");
    areaPublicacion.appendChild(h5);
    areaPublicacion.appendChild(imagen);
    areaTituloImg.value = " ";
  }
  e.preventDefault();
  usuarioImagen.value = null;
  fondoModal[1].style.display = "none";
  modal[1].style.display = "none";
});



