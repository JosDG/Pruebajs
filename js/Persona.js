var contador = 0;

class Persona {
  //Atributos
  //Costructor de atributos
  //Constructor
  constructor(id, nombre, email, clave, rol) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.rol = rol;
  }

  //Metodos
  enviadatos() {
    const idH = document.getElementById("cc").value;
    human.id = idH;
    const nombreH = document.getElementById("name").value;
    human.nombre = nombreH;
    const emailH = document.getElementById("email").value;
    human.email = emailH;
    const claveH = document.getElementById("pwd").value;
    human.clave = claveH;
    const rolH = document.getElementById("rol").value;
    human.rol = rolH;
    human.leaObjeto();
  }

  
  leaObjeto() {
    document.getElementById("tablaD").innerHTML +=
      "<tr><td>" +
      ++contador +
      "</td><td>" +
      human.id +
      "</td><td>" +
      human.nombre +
      "</td><td>" +
      human.email +
      "</td><td>" +
      human.clave +
      "</td><td>" +
      human.rol +
      "</td></tr>";
  }
}
