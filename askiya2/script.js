window.addEventListener("DOMContentLoaded", function() {

    var scrolled = null;

    function initScroll(elemId,speed) {
        var dest = document.getElementById(elemId).offsetTop;
        


        var scroller = setTimeout(function() {
            initScroll(elemId,speed);
        },1);

        scrolled += speed;

        if(scrolled >= dest) {
            clearTimeout(scroller);
            scrolled = dest;
            window.scroll(0,scrolled);
            scrolled = 0;
            return;
        }
        
        window.scroll(0,scrolled);
    }

    var fromTopScrolled = 0;  

    window.addEventListener("scroll", function() {
        fromTopScrolled = window.scrollY;
    });



    function toTop(speed) {

        var scroller = setTimeout(function() {
            toTop(speed);
        },1);

        fromTopScrolled -= speed;

        if(fromTopScrolled <= 0) {
            clearTimeout(scroller);
            return;
        }
        
        window.scroll(0, fromTopScrolled);
    }

    var toTopBtn = document.querySelector(".toTop");

    toTopBtn.addEventListener("click", function() {
        toTop(10);
    });

    var linkParents = document.querySelectorAll(".navList_responsive , .navList");

    for (let i = 0; i < linkParents.length; i++) {
        linkParents[i].addEventListener("click", function(e) {
            var target = e.target || event.target;
            var targetId = target.getAttribute("data-id");

            if(targetId){
                e.preventDefault();
                initScroll(targetId, 10);
            }

            
        },false);
        
    }

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

    // countNumber("number1",1001,5);

    function menuBtn() {
    var btn = document.querySelector(".menuToggleBtn");
    var navbar = document.querySelector(".navbar");
        btn.addEventListener("click", function() {
            navbar.classList.toggle("navbarActive");
            btn.classList.toggle("toggleBtnActive");
        } ,false);
    }
    menuBtn();

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });    

} ,false);