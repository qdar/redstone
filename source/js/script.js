let burger = document.querySelector('.js-burger');
let menu = document.querySelector('.burger__panel');

burger.addEventListener('click', function(){
	burger.classList.toggle('burger--open');
	menu.classList.toggle('active');
})


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
