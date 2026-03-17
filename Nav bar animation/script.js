// 1. Initialize the Timeline
// We set it to 'paused: true' so it doesn't play immediately
// We set it to 'reversed: true' so the first click plays it forward
const menuTL = gsap.timeline({ paused: true, reversed: true });

const overlay = document.querySelector("#menuOverlay");
const navLinks = document.querySelectorAll(".nav-link span");
const menuBtn = document.querySelector("#menuBtn");

// 2. Build the Animation Sequence
menuTL
    .set(overlay, { pointerEvents: "auto" }) // Allow clicking links when open
    .to(overlay, {
        clipPath: "circle(150% at 95% 5%)",
        duration: 1.2,
        ease: "expo.inOut"
    })
    .from(navLinks, {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
    }, "-=0.6") // Start showing links before overlay finishes
    .to("#line1", { y: 8, rotation: 45, duration: 0.3 }, "<") // Animate Burger to X
    .to("#line2", { opacity: 0, duration: 0.3 }, "<")
    .to("#line3", { y: -8, rotation: -45, width: "32px", duration: 0.3 }, "<");

// 3. The Toggle Event
menuBtn.addEventListener("click", () => {
    // Check the current state of the timeline
    if (menuTL.reversed()) {
        menuTL.play();
    } else {
        menuTL.reverse();
    }
});

// Close menu if a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuTL.reverse());
});
