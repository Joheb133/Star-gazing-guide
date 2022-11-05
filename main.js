const homeEl = document.querySelector('.home-section');
const telescopeTop = document.querySelector('#telescope-svg-top');
const anchor = document.querySelector('#telescope-svg');
let rekt = anchor.getBoundingClientRect()
    , anchorX = rekt.left + rekt.width / 2
    , anchorY = rekt.top + rekt.height / 2;

homeEl.addEventListener('mousemove', (e) => {
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