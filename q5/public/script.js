function setPicture(arr) {
    const images = document.querySelectorAll('img');
    images.forEach((img, i) => {
        img.src = arr[i];
        img.style.width = '190px';
    })
}

const url = ["https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"]

setPicture(url);