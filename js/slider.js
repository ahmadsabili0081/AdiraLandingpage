 var swiper = new Swiper(".mySwiper", {
     slidesPerView: 3,
     loop: true,
     spaceBetween: 350,
      autoplay: { 
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800:{
            slidesPerView: 3,
        },
        980:{
            slidesPerView: 3,
        },
        1000:{
            slidesPerView: 4,
        },
    },
        scrollbar: {
          el: ".swiper-scrollbar",
          snapOnRelease: true,
          draggable: true,
          lockClass: 'swiper-scrollbar-lock',
        },
});