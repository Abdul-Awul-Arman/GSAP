// gsap.from("#page1 #box",{
//     scale:0,
//     duration:1,
//     // delay:1,
//     scrollTrigger:"#page1 #box"
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:1,
//     // delay:.5,
//     rotate: 720,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         scrub:2,
//         start:"top 50%",
//         end:"top 30%",
//         pin:true

//     }
// })


gsap.to("#page2 h1", {
    transform: "translateX(-200%)",
    delay: 2,
    duration: 4,
    scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    start:"top 0%",
    // increase end parcentage for slowdown the animation speed 
    end:"top -150%",  
    markers: true,
        scrub:2,
        pin:true

    }

})