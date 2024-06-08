import searchImages from './js/pixabay-api.js';


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var inputValue = event.target.elements.input.value; 
    document.getElementById('main-ul').innerHTML = '';


    if (inputValue.trim() === '') {
        alert('Please enter a search query.');
    } else {
        searchImages(inputValue);
    }
    event.target.reset();
  });