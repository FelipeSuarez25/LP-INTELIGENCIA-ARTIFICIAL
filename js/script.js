document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    enviarImagen();
  });

document
  .getElementById("imagenInput")
  .addEventListener("change", function (event) {
    const imagenMostrada = document.getElementById("imagenMostrada");
    const mensajeImagen = document.getElementById("mensajeImagen");
    const archivo = event.target.files[0];

    if (archivo) {
      mensajeImagen.style.display = "none"; 
      imagenMostrada.classList.remove("loaded");

      const reader = new FileReader();

      reader.onload = function (e) {
        imagenMostrada.src = e.target.result;
        imagenMostrada.classList.add("loaded");
      };

      reader.readAsDataURL(archivo);
    } else {
      imagenMostrada.src = "placeholder-image.jpg";
      imagenMostrada.classList.remove("loaded");
      mensajeImagen.style.display = "block"; 
    }
  });

const cargarBoton = document.getElementById("cargarBoton");
const imagenInput = document.getElementById("imagenInput");

cargarBoton.addEventListener("click", function () {
  imagenInput.click();
});

cargarBoton.addEventListener("mousedown", function () {
  cargarBoton.classList.add("clicked");
});

cargarBoton.addEventListener("mouseup", function () {
  cargarBoton.classList.remove("clicked");
});

document
  .getElementById("imagenInput")
  .addEventListener("change", function (event) {
    const imagenMostrada = document.getElementById("imagenMostrada");
    const archivo = event.target.files[0];

    if (archivo) {
      imagenMostrada.classList.remove("loaded");

      const reader = new FileReader();

      reader.onload = function (e) {
        imagenMostrada.src = e.target.result;
        imagenMostrada.classList.add("loaded");
      };

      reader.readAsDataURL(archivo);
    } else {
      imagenMostrada.src = "placeholder-image.jpg";
    }
  });

function enviarImagen() {
  var inputImagen = document.getElementById("imagenInput");
  var imagenMostrada = document.getElementById("imagenMostrada");

  if (inputImagen.files.length > 0) {
    var datos = new FormData();
    datos.append("image", inputImagen.files[0]);

    var url = "http://127.0.0.1:8000/api/image/";

    fetch(url, {
      method: "POST",
      body: datos,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Error al cargar la imagen. Código de estado: " + response.status
          );
        }
      })
      .then((data) => {
        mostrarMensaje("Predicción exitosa: " + data.prediction + ' Con un porcentaje de confianza del: ' + data.accuracy);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        mostrarMensaje(
          "Error al cargar la imagen. Consulta la consola para más detalles.",
          error
        );
      });
  } else {
    console.warn("No hay ninguna imagen seleccionada para enviar.");
    mostrarMensaje("No hay ninguna imagen seleccionada para enviar.");
  }
}

function mostrarMensaje(mensaje) {
  var mensajeResultado = document.getElementById("mensajeResultado");

  var mensajeElemento = document.createElement("p");
  mensajeElemento.textContent = mensaje;

  while (mensajeResultado.firstChild) {
    mensajeResultado.removeChild(mensajeResultado.firstChild);
  }

  mensajeResultado.appendChild(mensajeElemento);

  mensajeResultado.style.textAlign = "center";
}

function mostrarMensajeError(mensaje) {
  var mensajeResultado = document.getElementById("mensajeResultado");
  mensajeResultado.innerHTML = '<p style="color: red;">' + mensaje + "</p>";
}

const typed = new Typed('.typed', {
    strings: ['por Imagen'],
    typeSpeed: 100,
    backSpeed: 75,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});



