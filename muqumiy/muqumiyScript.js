window.addEventListener("load", function() {


    function menuBtn() {
    var btn = document.querySelector(".menuToggleBtn");
    var navbar = document.querySelector(".navbar");
        btn.addEventListener("click", function() {
            navbar.classList.toggle("navbarActive");
            btn.classList.toggle("toggleBtnActive");
        } ,false);
    }
    menuBtn();

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        speed: 1500,
        autoplay: {
            delay: 5000
        },
        keyboard : {
            onlyInViewport: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        }
    
      })

} ,false);