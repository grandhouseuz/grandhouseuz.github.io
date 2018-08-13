window.addEventListener("DOMContentLoaded", function() {

    function countNumber(elemId, goal,speed) {
        var num = 0;
        function count(element) {
            var elem = document.getElementById(elemId);
            var counter = setTimeout(function() {
                count(elemId);
            },1);

            num += speed;

            if(num >= goal) {
                clearTimeout(counter);
                num = goal;
                elem.textContent = num;
                return;
            }

            elem.textContent = num;

        }
        count(elemId);
    }

    countNumber("number1",1001,5);

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