import renderImages from './render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function searchImages(query) {
    
    var loader = document.querySelector('#loader');
    loader.style.display = 'block';
    const searchParams = new URLSearchParams({
      key: "44270908-0491c90bbdb5ccf9a31273468",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true
    });
  
    const url = `https://pixabay.com/api/?${searchParams}`;
  
    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.hits.length === 0) {
            iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: '#ff0000',
            position: 'topRight',
            });
        } else {
            renderImages(data.hits);
        }
        loader.style.display = 'none';
    })
    .catch(error => console.error('Error:', error));

  }
  
  export default searchImages;