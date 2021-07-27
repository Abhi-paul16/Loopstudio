let burger = document.querySelector(".burger");

let nav = document.getElementById('nav')
let allLinks = document.getElementById('all-links')
let earthImg = document.getElementById('earth-img')
let NightArcade = document.getElementById('night-atcade')
let SoccerTeam = document.getElementById('soccer-team')
let ImageGrid = document.getElementById('img-grid')
let Fromup = document.getElementById('from-up')
let PocketBalls = document.getElementById('pocket')
let Curiosity = document.getElementById('curiousity')
let FishEye = document.getElementById('fish-eye')


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-bg')
    allLinks.classList.toggle('nav-active')
    burger.classList.toggle('change')

})

window.addEventListener('resize', () => {

    if (window.innerWidth < '740') {

        earthImg.src = 'mobile/image-deep-earth.jpg'
        NightArcade.src = 'mobile/image-night-arcade.jpg'
        SoccerTeam.src = 'mobile/image-soccer-team.jpg'
        ImageGrid.src = 'mobile/image-grid.jpg'
        Fromup.src = 'mobile/image-from-above.jpg'
        PocketBalls.src = 'mobile/image-pocket-borealis.jpg'
        Curiosity.src = 'mobile/image-curiosity.jpg'
        FishEye.src = 'mobile/image-fisheye.jpg'
    } else {
        earthImg.src = 'desktop/image-deep-earth.jpg'
        NightArcade.src = 'desktop/image-night-arcade.jpg'
        SoccerTeam.src = 'desktop/image-soccer-team.jpg'
        ImageGrid.src = 'desktop/image-grid.jpg'
        Fromup.src = 'desktop/image-from-above.jpg'
        PocketBalls.src = 'desktop/image-pocket-borealis.jpg'
        Curiosity.src = 'desktop/image-curiosity.jpg'
        FishEye.src = 'desktop/image-fisheye.jpg'
    }
})