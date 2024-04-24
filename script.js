let tl = gsap.timeline()

tl.from("nav", {
        y: -100,
        duration: 1
})

tl.from(".social", {
    x: -100,
    duration: .5
})

tl.from(".buy h1", {
    y: -175,
    duration: 1.5,
    stagger: .5,
    ease: "bounce.out"
})

tl.from(".elem", {
    x: 330,
    duration: 3,
    stagger: .5,
    ease: "bounce.out"
})