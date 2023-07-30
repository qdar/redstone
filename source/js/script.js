let burger  = document.querySelectorAll('.js-burger');
let menu    = document.querySelector('.burger__panel');
let burgerButton  = document.querySelector('.burger')

let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("burger--open");
  }
};

// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

let scroll = new SmoothScroll('a[href*="#"]', {speed: 400});


window.onscroll = function() {myFunction()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}

const swiper = new Swiper('.partners__slider', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
});

const swiperSolutions = new Swiper('.solutions__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiperCredentials = new Swiper('.credentials__slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperIndustries = new Swiper('.industries__slider', {

  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerColumnFill: 'row',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
  },

});


document.addEventListener('DOMContentLoaded', function() {

  let blocks = document.querySelectorAll('.block');

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach(block => {
    let blockPosition = block.getBoundingClientRect().top;
      if (blockPosition < windowHeight - 100) {
        block.style.opacity = "1";
        block.style.transform = "translateY(0)";
      }
    });
  }

  checkBlocksVisibility();
  window.addEventListener('scroll', function() {
    checkBlocksVisibility();
  });

});
