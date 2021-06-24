function openModalYoutube( idPelicula ) {

  let pelicula = peliculas.find( ( pelicula, index ) => index === idPelicula )

  document.querySelector('.modal-title').innerText = pelicula.titulo.toUpperCase();
  const iframe = document.querySelector('.modal-body').querySelector('iframe');

  iframe.setAttribute( 'src', pelicula.url );

  console.log( iframe );

  modalInstance.toggle();
}

function setDimensionsVideo() {

  console.log('dimensionando...');

  const modalBody = document.querySelector('.modal-body');
  const iframe = modalBody.querySelector('iframe');

  if ( !window.matchMedia('(max-width: 768px)').matches ) {
    iframe.setAttribute( 'height', ( modalBody.offsetHeight )  );
    iframe.setAttribute( 'width', ( modalBody.offsetWidth - 250 ) );

  } else {
    iframe.setAttribute( 'height', ( modalBody.offsetHeight )  );
    iframe.setAttribute( 'width', ( modalBody.offsetWidth  - 5 ) );

  }

  // console.log( iframe );
}

function renderList() {
  const row = document.querySelector('#row-movies');

  if ( sessionStorage.getItem('peliculas') ) {
    peliculas = JSON.parse( sessionStorage.getItem('peliculas'));

  } else {
    console.log('aqui');
    sessionStorage.setItem('peliculas', JSON.stringify( peliculas ) );

  }

  row.innerHTML = peliculas.map(( pelicula, index ) => (`
      <div class="row align-items-center">
        <div class="col-12 col-xl-2 text-center mb-4 mb-xl-0">
          <img src=${pelicula.imagen} alt="unidos_${index}" height="220" width="149" class="img-responsive">
        </div>
        <div class="col-12 col-xl-2 text-center mb-4 mb-xl-0">
          <img src=${ pelicula.formato } alt="2d2" style="border-radius: 5px;" class="img-responsive" height="60" width="75">
        </div>
        <div class="col-12 col-xl-4 mb-4 mb-xl-0">
          <article class="text-md-justify text-center">${pelicula.sinopsis}</article>
        </div>
        <div class="col-12 col-xl-4 text-center">
          <button onclick="openModalYoutube(${index})" class="btn btn-primary">
            <i class="bi bi-film me-2"></i>
            Ver trailer
          </button>
        </div>
      </div>
  `)).join('');
}

let peliculas = [
  {
    titulo: 'Unidos',
    imagen: 'images/UNIDOS.png',
    sinopsis: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.',
    formato: 'images/2d2des.png',
    url: 'https://www.youtube.com/embed/jk26pDvHtNw'
  },
  {
    titulo: 'Unidos',
    imagen: 'images/UNIDOS.png',
    sinopsis: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.',
    formato: 'images/2d2des.png',
    url: 'https://www.youtube.com/embed/jk26pDvHtNw'
  },
  {
    titulo: 'Unidos',
    imagen: 'images/UNIDOS.png',
    sinopsis: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.',
    formato: 'images/2d2des.png',
    url: 'https://www.youtube.com/embed/jk26pDvHtNw'
  }
];

document.addEventListener( 'DOMContentLoaded', () => {
  renderList();
});

const modalInstance = new bootstrap.Modal( document.querySelector('#exampleModal') );

document.querySelector('#exampleModal').addEventListener( 'shown.bs.modal', setDimensionsVideo )
window.onresize = setDimensionsVideo;  // cambia las dimensiones para cada dispositivo
