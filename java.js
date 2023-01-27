alert("Bienvenido a mi hoja de vida") 
document.getElementById('boton').addEventListener('click', function () {
    alert("Referirse a formulario para contacto. En la esquina inferior derecha se puede ajustar el tamaño de visualizacion de mensaje.Gracias")

})
;
document.getElementById('boton2').addEventListener('click', function () {
    document.body.style.backgroundColor = '#FFF' ;
    
    })
    const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});
    ;
