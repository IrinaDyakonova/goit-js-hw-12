import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function renderImages(images) {

    const ul = document.querySelector('ul');
    ul.innerHTML = '';
  
    images.forEach(image => {

        const li = document.createElement('li');
        li.id = 'parent-li';

        const a = document.createElement('a');
        a.href = image.largeImageURL;

        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        img.dataset.largeImage = image.largeImageURL;
        img.width = 360;
    
        const innerUl = document.createElement('ul');
        innerUl.id = 'inner-ul';

        const likesLi = document.createElement('li');
        likesLi.id = 'inner-li';
        const likesDiv_1 = document.createElement('div');
        likesDiv_1.textContent = "Likes";
        likesDiv_1.id = 'name';
        const likesDiv_2 = document.createElement('div');
        likesDiv_2.textContent = `${image.likes}`;
        likesDiv_2.id = 'count';
        likesLi.appendChild(likesDiv_1);
        likesLi.appendChild(likesDiv_2);
        innerUl.appendChild(likesLi);

        const viewsLi = document.createElement('li');
        viewsLi.id = 'inner-li';
        const viewsDiv_1 = document.createElement('div');
        viewsDiv_1.textContent = 'Views';
        viewsDiv_1.id = 'name';
        const viewsDiv_2 = document.createElement('div');
        viewsDiv_2.textContent = `${image.views}`;
        viewsDiv_2.id = 'count';
        viewsLi.appendChild(viewsDiv_1);
        viewsLi.appendChild(viewsDiv_2);
        innerUl.appendChild(viewsLi);

        const commentsLi = document.createElement('li');
        commentsLi.id = 'inner-li';
        const commentsDiv_1 = document.createElement('div');
        commentsDiv_1.textContent = 'Comments';
        commentsDiv_1.id = 'name';
        const commentsDiv_2 = document.createElement('div');
        commentsDiv_2.textContent = `${image.comments}`;
        commentsDiv_2.id = 'count';
        commentsLi.appendChild(commentsDiv_1);
        commentsLi.appendChild(commentsDiv_2);
        innerUl.appendChild(commentsLi);
    
        const downloadsLi = document.createElement('li');
        downloadsLi.id = 'inner-li';
        const downloadsDiv_1 = document.createElement('div');
        downloadsDiv_1.textContent = 'Downloads';
        downloadsDiv_1.id = 'name';
        const downloadsDiv_2 = document.createElement('div');
        downloadsDiv_2.textContent = `${image.downloads}`;
        downloadsDiv_2.id = 'count';
        downloadsLi.appendChild(downloadsDiv_1);
        downloadsLi.appendChild(downloadsDiv_2);
        innerUl.appendChild(downloadsLi);

        a.appendChild(img);
        li.appendChild(a);
        li.appendChild(innerUl);

    
        ul.appendChild(li);
    });
    new SimpleLightbox('li a', {
        captionsData: 'alt',
        captionDelay: 250
    });

  }
  
  export default renderImages;