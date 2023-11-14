//intanciar la clase => crea el eobjeto
const human = new Persona();

var tarjetasExistentes = [];

function enviardatos() {
  var cc = document.getElementById("cc").value;
  if (tarjetasExistentes.includes(cc)) {
    alert("La Cedula ya existe.");
    return;
  }
  human.enviadatos();
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
