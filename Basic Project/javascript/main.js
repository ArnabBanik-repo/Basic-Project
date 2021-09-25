const parallax = document.getElementById("para");
window.addEventListener("scroll", function () {
let offset = window.pageYOffset;
parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".content", {top: 0}, 10)


let scene = new ScrollMagic.Scene({
    triggerElelment: "section",
    duration: "300%",
    triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);