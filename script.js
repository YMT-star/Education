
let header = document.querySelector("header");
let menuBar = document.querySelector(".menuBar");

document.querySelector(".menuBar").onclick=()=>{
    menuBar.classList.toggle('fa-times');
    header.classList.toggle("active");
    // console.log(header.classList.toggle("active"));
}

 var swiper = new Swiper(".course-box-container", {
  cssMode: true,
  slidesPerView:1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    mousewheel: true,
    keyboard: true,
  },
  breakpoints: {
    "460": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "760": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "1024": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".teacher-box-container", {
  cssMode: true,
  slidesPerView:1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    mousewheel: true,
    keyboard: true,
  },
  breakpoints: {
    "460": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "760": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "1024": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".reviews-box-container", {
  cssMode: true,
  slidesPerView:1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    mousewheel: true,
    keyboard: true,
  },
  breakpoints: {
    "460": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "760": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "1024": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});