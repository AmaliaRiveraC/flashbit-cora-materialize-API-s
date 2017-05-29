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
  var div = document.createElement("div");
  var h5 = document.createElement("h5");
  h5.textContent = titulo;
  var parrafo = document.createElement("p");
  parrafo.textContent = mensaje;
  div.appendChild(h5);
  div.appendChild(parrafo);
  areaPublicacion.appendChild(div);
  div.className = "container " + "center " + "card-panel " + "hoverable";
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
  var div = document.createElement("div");
  var h5 = document.createElement("h5");
  h5.textContent = tituloImg;
  var reader = new FileReader();
  reader.readAsDataURL(usuarioImagen.files[0]);

  reader.onload = function () {

    var imagen = new Image();
    imagen.src = reader.result;
    imagen.classList.add("image-responsive", "col", "s12");
    div.className = "container " + "center " + "card-panel " + "hoverable";
    div.appendChild(h5);
    div.appendChild(imagen);
    areaPublicacion.appendChild(div);
    areaTituloImg.value = " ";
  }
  usuarioImagen.value = null; // esta línea pretende limpiar el input file pero no lo consigue
  fondoModal[1].style.display = "none";
  modal[1].style.display = "none";
});


/* Evento y geolocalización*/

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({
      map: map
    });

    
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }

var areaTituloEvento = document.getElementById("modal-event-title");
var mapa = document.getElementById("map");
botonPublicar[2].addEventListener("click", function () {
  // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }


  var tituloEvento = areaTituloEvento.value;
  var divContenedor = document.createElement("div");
  var h5 = document.createElement("h5");
  h5.textContent = tituloEvento;
  divContenedor.className = "container " + "center " + "card-panel " + "hoverable";
  mapa.className = "center";
  divContenedor.appendChild(h5);
  divContenedor.appendChild(mapa);
  mapa.style.display = "block";
  areaPublicacion.appendChild(divContenedor);

  fondoModal[2].style.display = "none";
  modal[2].style.display = "none";
  mapa.style.display = "flex";

});
