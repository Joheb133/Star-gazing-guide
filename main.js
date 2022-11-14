
//telescope following mouse animation
const homeEl = document.querySelector('.home-section');
const telescopeTop = document.querySelector('#telescope-svg-top');
const anchor = document.querySelector('#telescope-svg');
let rekt = anchor.getBoundingClientRect()
    , anchorX = rekt.left + rekt.width / 2
    , anchorY = rekt.top + rekt.height / 2;

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    if (angleDeg >= 90) {
        telescopeTop.style.transform = `rotate(${-angleDeg - 200}deg) scaleX(${-1})`;
    } else if (angleDeg <= 90 && angleDeg >= 0) {
        telescopeTop.style.transform = `rotate(${-angleDeg + 20}deg) scaleX(${1})`;
    }
})

window.addEventListener('resize', () => {
    rekt = anchor.getBoundingClientRect()
    anchorX = rekt.left + rekt.width / 2
    anchorY = rekt.top + rekt.height / 2;
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg
}


//guide read more animation
const hiddenGuide = document.querySelector(".hidden-para");
const hiddenGuideTl = gsap.timeline()

hiddenGuide.style.display = "none"

function showHiddenContent() {
    if(hiddenGuideTl.isActive()) { return };
    if (hiddenGuide.style.display === "none"){
        hiddenGuide.style.display = "block";
        hiddenGuideTl.fromTo(".hidden-para p", 1.5, {y: -150}, {y: 0, ease: Power2.easeInOut})
        .fromTo(hiddenGuide, 2, { opacity: "0"}, {opacity: "100%", ease: Power2.easeInOut}, "-=1")
    } else {
        hiddenGuide.style.display = "none"
    }
}

//locations DOM manipulation
const figcaptions = [...document.querySelectorAll('.locations-items figure figcaption')]

fractionPagination();
function fractionPagination() {
    figcaptions.forEach ((index, i) => {
        const span = document.createElement("span");
        span.innerText = `${i+1}/${figcaptions.length}`
        index.appendChild(span)
    })
}