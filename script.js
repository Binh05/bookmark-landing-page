const menuBtn = document.querySelector('.menu')
const menuOpen = document.querySelector('.nav')
const closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', () => {
    menuOpen.classList.add('nav__open')
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    menuOpen.classList.remove('nav__open')
    menuBtn.style.display = 'block'
})

const featureControl = document.querySelector('.features-tabs')
let featureActive = document.querySelector('.features__tab--active')

featureControl.addEventListener('click', (e) => {
    const clickedEl = e.target;

    const clickedTab = clickedEl.closest('.features__tab')

    if (!clickedTab || clickedTab === featureActive || clickedTab === featureControl)
        return

    featureActive.classList.remove('features__tab--active')
    clickedTab.classList.add('features__tab--active')

    featureActive = clickedTab
})