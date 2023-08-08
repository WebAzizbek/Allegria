AOS.init();
const population = new Swiper('.population__swiper', {
    slidesPerView: 4,
    spaceBetween: 45,
    loop: true,
    navigation: {
        prevEl: '.population-prev',
        nextEl: '.population-next',
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 19,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 19,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 45,
        }
    }
});
$(() => {
    $('.owl-carousel').owlCarousel({
        items: 1,
        smartSpeed: 1500,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });
})

let label = document.getElementById('headernav__label');
let search = document.querySelector('.search');
let barsBtn = document.querySelector('.bars-btn');
let xBtn = document.querySelector('.x-btn');
let run = document.querySelector('.run');
// let title = document.querySelectorAll('.run__title-wrapper');
// let list = document.querySelector('.run__nav-list');

label.addEventListener("click", () => {
    search.classList.toggle('search-open')
});
barsBtn.addEventListener("click", () => {
    run.style.translate = '0';
});
xBtn.addEventListener("click", () => {
    run.style.translate = '-100%';
});

// title.forEach((item) => {
//     item.addEventListener("click", () => {
//         list.style.display = 'block';
//     })
// })


