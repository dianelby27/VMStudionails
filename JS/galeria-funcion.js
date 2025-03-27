    const btncierra = document.querySelector("#btn-cierra")
    const btnAnterior = document.querySelector("#btn-anterior")
    const btnSiguiente = document.querySelector("#btn-siguiente")
    const imagenes = document.querySelectorAll(".img_container")
    const lightbox = document.querySelector("#contenedor-principal")
    const imagenActiva = document.querySelector("#img-activa")
    const body = document.body; 
    let indiceImagen = 0

    
    // Abre el lightbox

    const AbreLightbox = (event) => {
      imagenActiva.src = event.target.src;
      lightbox.style.display = "flex";
      body.classList.add('modal-open');
    };

    imagenes.forEach((imagen)=> {
      imagen.addEventListener("click", AbreLightbox);
    })

  // Cierra el lightbox

  btncierra.addEventListener("click", ()=> {
    lightbox.style.display = "none"
    body.classList.remove('modal-open'); 
  })

  // Siguiente imagen
  
  const siguienteImagen = () => {

    if(indiceImagen== imagenes.length -1){
      indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
  }

  btnSiguiente.addEventListener("click", siguienteImagen)

  // Anterior imagen

  const anteriorImagen = () => {
    if(indiceImagen==0) {
      indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen -1].src;
    indiceImagen--;
  }
  btnAnterior.addEventListener("click", anteriorImagen)
  

