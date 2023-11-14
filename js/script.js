var contador = 0;
var tarjetasExistentes = [];

function enviardatos() {
  var cc = document.getElementById("cc").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  var rol = document.getElementById("rol").value;

  if (tarjetasExistentes.includes(cc)) {
    alert("La Cedula ya existe.");
    return;
  }

  document.getElementById("tablaD").innerHTML +=
    "<tr><td>" +
    ++contador +
    "</td><td>" +
    cc +
    "</td><td>" +
    name +
    "</td><td>" +
    email +
    "</td><td>" +
    pwd +
    "</td><td>" +
    rol +
    "</td></tr>";

  tarjetasExistentes.push(cc);
  borrar();
}


function borrar() {
    var form = document.querySelector("form");
  
    var campos = form.querySelectorAll("input");
  
    for (var i = 0; i < campos.length; i++) {
      campos[i].value = "";
    }
  }

