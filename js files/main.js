var swiper = new Swiper(".mySwiper", {
    // effect: "coverflow",
    // grabCursor: true,
    // centeredSlides: true,
   breakpoints:{
    0:{
      slidesPerView: 1,
      spaceBetween: 5,
    },
    700:{
      slidesPerView: 2.6,
      spaceBetween: 10,
    },
    991:{
      slidesPerView: 4,
      spaceBetween: 30,
   }
   },
  // slidesPerView: 4,
  
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,  
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

let sideNav = document.querySelector('.sidenav')
let menu = document.querySelector('.nav')
let iconMenu = document.querySelector('#menuu')

menu.addEventListener('click', ()=>{
  if(sideNav.style.right == '-300px'){
    sideNav.style.right = '0'
    iconMenu.src = "./images/icon-close.png" 
  }
  else{
    sideNav.style.right = "-300px"
    iconMenu.src = "./images/icon-hamburger.png"
  }
}
  )