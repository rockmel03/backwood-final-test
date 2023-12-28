
document.querySelector('#current-year').innerHTML = new Date().getFullYear();
locomotiveScrollTrigger();
navbarFunctions();

function locomotiveScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function navbarFunctions() {
    document.querySelector(' #menu-btn').addEventListener('click', () => {
        // document.querySelector('.sidenav').style.right = 0;
        gsap.to('.sidenav', {
            right: 0,
            display: "flex",
            duration: .2,
        })
    })
    document.querySelector(' #close-sidenav').addEventListener('click', () => {
        // document.querySelector('.sidenav').style.right = "-100%";
        gsap.to('.sidenav', {
            display: "none",
            right: "-80%",
            duration: .2,
        })
    })

    let navDropdownIsOpen = false;
    document.querySelector('.nav-dropdown').addEventListener('click', () => {
        const dropdown = document.querySelector('.nav-dropdown-links')
        if (navDropdownIsOpen) {
            // dropdown.style.height = 0 ;
            gsap.to(dropdown, {
                height: 0,
                duration: .5,
            })
            navDropdownIsOpen = false;
        } else {
            // dropdown.style.height = "fit-content";
            gsap.to(dropdown, {
                height: "fit-content",
                duration: .5,
            })
            navDropdownIsOpen = true;
        }
    })
    let dropdownIsOpen = false;
    document.querySelector('.products-dropdown').addEventListener('click', () => {
        const dropdown = document.querySelector('.dropdown-links')
        if (dropdownIsOpen) {
            // dropdown.style.height = 0 ;
            gsap.to(dropdown, {
                height: 0,
                duration: .5,
            })
            dropdownIsOpen = false;
        } else {
            // dropdown.style.height = "fit-content";
            gsap.to(dropdown, {
                height: "fit-content",
                duration: .5,
            })
            dropdownIsOpen = true;
        }
    })


}

mouseFollwer()
function mouseFollwer() {
    window.addEventListener('mousemove', (dets) => {
        gsap.to('.cursor', {
            x: dets.clientX,
            y: dets.clientY,
            duration: .5,
            ease: Power4,
        })
    })
}