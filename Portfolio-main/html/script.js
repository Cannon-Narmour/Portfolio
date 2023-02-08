const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);

});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

(function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
      heart.classList.toggle('orange');
    });
  })();

(function() {
const heart = document.getElementById('heart1');
heart.addEventListener('click', function() {
    heart.classList.toggle('orange');
});
})();

(function() {
const heart = document.getElementById('heart2');
heart.addEventListener('click', function() {
    heart.classList.toggle('orange');
});
})();

(function() {
const heart = document.getElementById('heart3');
heart.addEventListener('click', function() {
    heart.classList.toggle('orange');
});
})();
    
    


// new func
