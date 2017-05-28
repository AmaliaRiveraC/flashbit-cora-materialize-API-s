var boton = document.getElementsByClassName("btn");
var modal = document.getElementsByClassName("modal");
var areaPublicacion = document.getElementById("main");

boton[0].addEventListener("click", function () {
  modal[0].style.display = "block";
  modal[1].style.display = "none";
  modal[2].style.display = "none";
  modal[3].style.display = "none";
});

boton[1].addEventListener("click", function(){
  modal[1].style.display = "block";
  modal[0].style.display = "none";
});

boton[2].addEventListener("click", function(){
  modal[2].style.display = "block";
});

boton[3].addEventListener("click", function(){
  modal[3].style.display = "block";
});




/*function publicar() {
  var areaTexto = document.getElementById("texto");
  var publicaciones = document.getElementById("publicaciones");
  var texto = areaTexto.value;
  var parrafo = document.createElement("p");
  parrafo.textContent = texto;
  publicaciones.appendChild(parrafo);// crea tantos textos como se envien desde el textarea hacia otra seccion del doc
  areaTexto.value = " ";//limpiamos lo que escribe el usuario 
}

function subirFoto(elemento) {
  var reader = new FileReader();
  reader.onload = function () {
  var imagenUsuario = document.getElementById("imagen-usuario");
  imagenUsuario.src = reader.result;
}
  reader.readAsDataURL(elemento.files[0]);
}
*/
