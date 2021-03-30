const modal = document.getElementById("modal");
const f_modal = document.getElementById("form_modal");
const subscribeBtn = document.getElementById("subscribe");
console.log(subscribeBtn);
const span = document.getElementsByClassName("close")[0];
const nav = document.getElementById("nav");
const logo = document.querySelector(".nav_logo");
const s_form = document.querySelector(".subscribe_form");
const m_title = document.getElementById("modal_header");

console.log("main js worked");

// var myFullpage = new fullpage('#fullpage', {
//     //options here
//     autoScrolling:true,
//     scrollHorizontally: true
// });


// function for changing navbar

$('html').bind('mousewheel DOMMouseScroll keydown', function (e) {
    if(window.pageYOffset > 0) {
        nav.classList.add("bg-grey");
        if(window.innerWidth > 1200) {
            logo.setAttribute("src", "./images/logo-blue.png");
        } 
    } else {
        nav.classList.remove("bg-grey");
        logo.setAttribute("src", "./images/logo-white.png")
    }

});

// go to top function

document.getElementById("goToTop").addEventListener("click", () => {
    fullpage_api.moveTo();
    nav.classList.remove("bg-grey");
    logo.setAttribute("src", "./images/logo-white.png")
});

// functions for modal

const show_modal = () => {
    s_form && s_form.classList.add("active");
    subscribeBtn && subscribeBtn.classList.add("active");
    f_modal && (f_modal.style.display = "none");
    modal.style.display = "flex";
}

const showf_modal = (event) => {
    f_modal.style.display = "flex";
    m_title && (m_title.innerText = event.target.innerText);
}

const close_modal = () => {
    modal.style.display = "none";
    s_form && s_form.classList.remove("active");
    subscribeBtn && subscribeBtn.classList.remove("active");
}


window.onclick = function(event) {
    if (event.target == modal || event.target == f_modal) {
        modal.style.display = "none";
        f_modal.style.display = "none";
        s_form && s_form.classList.remove("active");
        subscribeBtn && subscribeBtn.classList.remove("active");
    }
}

// function burger menu 

document.getElementById("dropdown_nav").addEventListener('click', function toggleNav() {
    document.getElementById("dropdown_menu").classList.toggle("d-none");
    document.getElementById("burger_menu").classList.toggle("active");
});

// function for swiper

var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 2,
    // slideToClickedSlide: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "custom",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    watchSlidesProgress: true,
    breakpointsBase: "container",
    // cssWidthAndHeight: true,
    // autoResize: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            pagination: {
                el: ".swiper-pagination",
                type: 'fraction',
            }
        },
        768: {
            slidesPerView: 1,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },
        },
        1200: {
            slidesPerView: 2,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                type: "bullets"
            }
        }
    }
});


