const hamburgerContainer = document.querySelectorAll(".hamburger-container")
const mobileMenuContainer = document.querySelector(".mobile-menu-container")
const nav = document.querySelector(".nav")

hamburgerContainer.forEach(container => container.addEventListener('click', ()=>{
    container.classList.toggle("open-menu")
    mobileMenuContainer.classList.toggle("open-menu")
    nav.classList.toggle('open-menu')
}))

