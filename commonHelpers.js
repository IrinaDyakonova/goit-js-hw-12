import{S as m,a as f,i as c}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let d;function p(i){const o=document.querySelector("ul");let n="";o.insertAdjacentHTML("beforeend",n),i.forEach(r=>{n+=`
        <li id='parent-li'>
            <a href="${r.largeImageURL}"  class="lightbox">
                <img src="${r.webformatURL}" alt="${r.tags}" data-large-image="${r.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${r.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${r.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${r.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${r.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
    `}),o.insertAdjacentHTML("beforeend",n),d?d.refresh():d=new m(".lightbox",{captionsData:"alt",captionDelay:250})}let a=80,l="";async function u(i){i!==l&&(l=i,a=1);let o=15;const r=`https://pixabay.com/api/?${new URLSearchParams({key:"44270908-0491c90bbdb5ccf9a31273468",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:a})}`;try{document.querySelector("span").style.display="block";const t=(await f.get(r)).data;t.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"}):p(t.hits),o*a>=t.totalHits?(document.querySelector("#load-more-button").style.display="none",c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):document.querySelector("#load-more-button").style.display="block";const s=document.querySelector("img").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),a++}catch(e){console.error("Error:",e)}document.querySelector("span").style.display="none"}document.addEventListener("DOMContentLoaded",i=>{document.querySelector("#load-more-button").addEventListener("click",()=>{u(l)})});document.getElementById("form").addEventListener("submit",function(i){i.preventDefault();var o=i.target.elements.input.value;document.getElementById("main-ul").innerHTML="",document.getElementById("load-more-button").style.display="none",o.trim()===""?alert("Please enter a search query."):u(o),i.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
