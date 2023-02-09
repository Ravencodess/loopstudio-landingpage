const hamburgerContainer = document.querySelector(".hamburger-container")
const mobileMenuContainer = document.querySelector(".mobile-menu-container")
const nav = document.querySelector(".nav")

hamburgerContainer.addEventListener('click', ()=>{
    hamburgerContainer.classList.toggle("open-menu")
    mobileMenuContainer.classList.toggle("open-menu")
    nav.classList.toggle('open-menu')
})

mobileMenuContainer.addEventListener('click', ()=>{
    hamburgerContainer.classList.toggle("open-menu")
    mobileMenuContainer.classList.toggle("open-menu")
    nav.classList.toggle('open-menu')
})

console.log(hamburgerContainer);