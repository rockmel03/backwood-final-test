swiperJs();
servicePageAnime ();
homePageAnime();
landingPageAnime();
function landingPageAnime(){
    let tl = gsap.timeline();
    tl.from('.lending-page-2', {
        y : "100%",
        duration: 1,
    })
    tl.from('.lending-page-2 h1 span', {
        x : -100,
        opacity: 0,
        duration: 1.5,
        stagger: .5,
    },"anime")
    tl.from('.lending-page-2 p', {
        y : 100,
        opacity: 0,
        duration: 1.5,
    },"anime")
}

function homePageAnime() {
    const tl = gsap.timeline();
    tl.from('.hero', {
        y: 100,
        duration: .5,
    })
    tl.from('.hero-text #heading',{
        y: 100,
        opacity: 0,
        duration: .5,
        stagger: .1,
    })
    tl.from('.hero-text p',{
        y: 100,
        duration: .5,
        opacity : 0,
    })
    tl.from('.hero-text a',{
        x: -100,
        duration: .5,
        opacity : 0,
    })

    gsap.from('.hero-img-container img',{
        scale : 0,
        duration :1,
        delay: .5,
    })
}

function swiperJs () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: (window.outerWidth > 640 ? 3 : 1),
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}

function servicePageAnime () {
    gsap.from('#services .services-text',{
        x: "-100%",
        duration: 1,
        scrollTrigger : {
            scroller : "#main",
            trigger: "#services .services-text",
            start: "top 90%",
            end : "top 60%",
            // markers: true,
            scrub: 3,
        }
    })
    gsap.from('#services img',{
        x: "100%",
        duration: 1,
        scrollTrigger : {
            scroller : "#main",
            trigger: "#services img",
            start: "top 90%",
            end : "top 80%",
            // markers: true,
            scrub: 3,
        }
    })
}
