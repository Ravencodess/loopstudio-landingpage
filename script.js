const hamburgerContainer = document.querySelectorAll(".hamburger-container")
const mobileMenuContainer = document.querySelector(".mobile-menu-container")
const nav = document.querySelector(".nav")

hamburgerContainer.forEach(container => container.addEventListener('click', ()=>{
    container.classList.toggle("open")
    mobileMenuContainer.classList.toggle("open")
    nav.classList.toggle('open')
}))

