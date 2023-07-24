let burger = document.querySelector('.js-burger');
let menu = document.querySelector('.burger__panel');

burger.addEventListener('click', function(){
	burger.classList.toggle('burger--open');
	menu.classList.toggle('active');
})


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


let acc = document.getElementsByClassName("tab__button");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("tab__button--open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
