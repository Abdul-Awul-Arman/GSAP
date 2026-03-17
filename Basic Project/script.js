 function page1Animation(){

     let tl = gsap.timeline();

     // 1. First animation: Logo
     tl.from(".logo,nav button", {
         y: -30,
         duration: 0.2,
         opacity: 0
     })

     // 2. Starts immediately after the first one (logo)
     tl.from("nav a", {
         y: -30,
         duration: 0.2,
         opacity: 0,
         ease: "power2.out",
         stagger: {
             each: 0.2,
             from: "edges"
         }
     }, "-=0.2") // Position parameter: overlap it slightly with the logo animation

     // 3. Finally, animate the button

     tl.from('.hero-text', {
         x: -500,
         duration: .3,
         opacity: 0,
         ease: "power2.out"
     })

     tl.from('.hero-image', {
         y: 500,
         duration: .3,
         opacity: 0,
         ease: "power2.out"
     })

     tl.from('.logo-text', {
         y: 30,
         duration: .6,
         opacity: 0,
         stagger: .15
     })

    
 }
 page1Animation();