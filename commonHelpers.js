import{S as u,a as m,i as d}from"./assets/vendor-b11e2a50.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function f(o){const i=document.querySelector("ul");let n="";i.insertAdjacentHTML("beforeend",n),o.forEach(t=>{n+=`
        <li id='parent-li'>
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" data-large-image="${t.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${t.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${t.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${t.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${t.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
    `}),i.insertAdjacentHTML("beforeend",n),new u("li a",{captionsData:"alt",captionDelay:250})}let s=80,a="";async function c(o){o!==a&&(a=o,s=1);const n=`https://pixabay.com/api/?${new URLSearchParams({key:"44270908-0491c90bbdb5ccf9a31273468",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s})}`;try{const e=(await m.get(n)).data;e.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ff0000",position:"topRight"}):f(e.hits),e.hits.length*s>=e.totalHits?(document.querySelector("#load-more-button").style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):document.querySelector("#load-more-button").style.display="block";const r=document.querySelector("img").getBoundingClientRect().height;console.log(r),window.scrollBy({top:r*2,behavior:"smooth"}),s++}catch(t){console.error("Error:",t)}}document.addEventListener("DOMContentLoaded",o=>{document.querySelector("#load-more-button").addEventListener("click",()=>{c(a)})});document.getElementById("form").addEventListener("submit",function(o){o.preventDefault();var i=o.target.elements.input.value;document.getElementById("main-ul").innerHTML="",document.getElementById("load-more-button").style.display="none",i.trim()===""?alert("Please enter a search query."):c(i),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
