document.getElementById('imagenInput').addEventListener('change', function(event) {
  const imagenMostrada = document.getElementById('imagenMostrada');
  const archivo = event.target.files[0];

  if (archivo) {
    const reader = new FileReader();

    reader.onload = function(e) {
      imagenMostrada.src = e.target.result;
      imagenMostrada.style.display = 'block';
    };

    reader.readAsDataURL(archivo);
  } else {
    imagenMostrada.src = 'placeholder-image.jpg';
    imagenMostrada.style.display = 'block';
  }
});

const cargarBoton = document.getElementById('cargarBoton');
const imagenInput = document.getElementById('imagenInput');

cargarBoton.addEventListener('click', function() {
  imagenInput.click(); 
});

cargarBoton.addEventListener('mousedown', function() {
  cargarBoton.classList.add('clicked');
});

cargarBoton.addEventListener('mouseup', function() {
  cargarBoton.classList.remove('clicked');
});


// Evento 'change' en el input de imagen
document.getElementById('imagenInput').addEventListener('change', function(event) {
  const imagenMostrada = document.getElementById('imagenMostrada');
  const archivo = event.target.files[0];

  if (archivo) {
    imagenMostrada.classList.remove('loaded');

    const reader = new FileReader();

    reader.onload = function(e) {
      imagenMostrada.src = e.target.result;
      imagenMostrada.classList.add('loaded');
    };

    reader.readAsDataURL(archivo);
  } else {
    imagenMostrada.src = 'placeholder-image.jpg';
  }
});


