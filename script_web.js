let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    // shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active'); 
//     navbar.classList.remove('active');
// }

// let loginForm = document.querySelector('.login-form');

// document.querySelector('#user-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navbar.classList.remove('active');
// }

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});





// --------------------loader script------------------------

const loaderContainer = document.querySelector('.loader-container')
const websiteLoader = document.querySelector('.website-loader')

window.addEventListener('load', () => {
  loaderContainer.classList.add('hidden');
  websiteLoader.classList.add('show')
});

// -----------------end of loader script----------------------







// --------------------the fetch api method script-----------------

fetch("product.json")
.then(function(response){
    return response.json();
})

.then(function(product){
    const productholder = document.getElementById("box-container");
    let output = " ";

    for(let products of product){
        output += `
        <div class="box" id="box">
        <img src= ${products.image} class="myimages">
        <h3>${products.name}</h3>
        <h1> &#8358; ${products.prize}</h1>
        <h1> Product ID: ${products.id}</h1>
        <a href="${products.link}" class="btn"> buy now</a>
        </div>

        `;
    }

    productholder.innerHTML = output;
});

// ---------------------------end of fetch method----------------------