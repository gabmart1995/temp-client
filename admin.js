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
    url,
    titulo: 'prueba'
  }

  let peliculas = JSON.parse( sessionStorage.getItem('peliculas'));
  peliculas.push( data );

  sessionStorage.setItem('peliculas', JSON.stringify( peliculas ));

  toastInstances[0].show();

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

const output = document.querySelector('#output');
const cardDefault = document.querySelector('#card-default');
const form = document.querySelector('form[name="load-movies"]');

let image = null;
let toastInstances = [];

form.addEventListener( 'submit', loadMovies );

document.addEventListener( 'DOMContentLoaded', () => {
  output.style.display = 'none';
  cardDefault.style.display = '';

  const toastsNodes = Array.from( document.querySelectorAll('.toast') );

  toastsNodes.forEach((element, index) => {
    toastInstances.push( new bootstrap.Toast( element, { delay: 2500 } ) );
  });
});
