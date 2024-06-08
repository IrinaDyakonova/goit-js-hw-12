import axios from 'axios';
import renderImages from './render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default searchImages;

let page = 80;
let query = '';

async function searchImages(newQuery) {
    if (newQuery !== query) {
        query = newQuery;
        page = 1;
    }

    const searchParams = new URLSearchParams({
        key: "44270908-0491c90bbdb5ccf9a31273468",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color: '#ff0000',
                position: 'topRight',
            });
        } else {
            renderImages(data.hits);
        }

        if (data.hits.length * page >= data.totalHits) {
            document.querySelector('#load-more-button').style.display = 'none';
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        } else {
            document.querySelector('#load-more-button').style.display = 'block';
        }

        const cardHeight = document.querySelector('img').getBoundingClientRect().height;
        console.log(cardHeight);
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });

        page++;
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#load-more-button').addEventListener('click', () => {
        searchImages(query);
    });
});

