function loadMovies( $event ) {
  $event.preventDefault();

  const formData = new FormData( form );

  let url = formData.get('url') || '';

  if ((/^https:\/\/www.youtube.com/).test( url )) {
    url = 'https://www.youtube.com/embed/' + url.split('v=')[1];
  }

  const data = {
    formato: formData.get('formato'),
    imagen: image,
    sinopsis: formData.get('sinopsis'),
    url
  }

  peliculas.push( data );

  renderList();
  resetForm();
}

function resetForm() {
  output.style.display = 'none';
  cardDefault.style.display = '';

  form.reset();
}

function handleChangeImg( $event ) {

  const file = $event.target.files[0];
  const path  = $event.target.value;
  const types = ['image/jpeg', 'image/png'];
  const reader = new FileReader();

  if ( !types.includes( file.type ) ) {
    return;
  }

  reader.onload = ( $imgEvent ) => {

    let base64Img = $imgEvent.target.result;

    // console.log({ base64Img, $imgEvent });

    output.style.display = '';
    cardDefault.style.display = 'none';

    output.src = base64Img;
    image = base64Img;
  }

  reader.readAsDataURL( file );
}

function renderList() {
  const row = document.querySelector('#row-movies');

  row.innerHTML = peliculas.map(( pelicula, index ) => (`
      <div class="row align-items-center">
        <div class="col-12 col-xl-2 text-center mb-4 mb-xl-0">
          <img src=${ pelicula.imagen } alt="unidos_${index}" height="220" width="149" class="img-responsive">
        </div>
        <div class="col-12 col-xl-2 text-center mb-4 mb-xl-0">
          <img src=${ pelicula.formato } alt="2d2" style="border-radius: 5px;" class="img-responsive" height="60" width="75">
        </div>
        <div class="col-12 col-xl-4 mb-4 mb-xl-0">
          <article class="text-md-justify text-center">${ pelicula.sinopsis }</article>
        </div>
        <div class="col-12 col-xl-4 text-center">
          <iframe width="250" height="200" src=${ pelicula.url } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  `)).join('');
}

let peliculas = [
  {
    imagen: 'images/UNIDOS.png',
    sinopsis: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.',
    formato: 'images/2d2des.png',
    url: 'https://www.youtube.com/embed/jk26pDvHtNw'
  },
  {
    imagen: 'images/UNIDOS.png',
    sinopsis: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.',
    formato: 'images/2d2des.png',
    url: 'https://www.youtube.com/embed/jk26pDvHtNw'
  },
  {
    imagen: 'images/UNIDOS.png',
    sinopsis: 'Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.',
    formato: 'images/2d2des.png',
    url: 'https://www.youtube.com/embed/jk26pDvHtNw'
  }
];

let image = null;

const output = document.querySelector('#output');
const cardDefault = document.querySelector('#card-default');

document.addEventListener( 'DOMContentLoaded', () => {
  // output.style.display = 'none';
  // cardDefault.style.display = '';

  renderList();
});

// const form = document.querySelector('form[name="load-movies"]');

// form.addEventListener( 'submit', loadMovies );
