const productsBtn = document.querySelector(".subMenu-btn"), 
    menu = document.querySelector(".mobile-navigation"),
    subMenu = document.querySelector(".mobile-subMenu"), 
    tabletMenu = document.querySelector(".tablet-desktop-navigation"), 
    tabletOpenBtn = document.querySelector(".open-btn"), 
    tabletCloseBtn = document.querySelector(".close-btn"), 
    homeLink = document.querySelector(".home img")


productsBtn.addEventListener("click", () => {
    if(subMenu.classList.contains("mobile-menu-open")){
        subMenu.classList.remove("mobile-menu-open")
        productsBtn.style.color = "#F1F1F1"
        menu.style.borderTop = "none"
    } else {
        subMenu.classList.add("mobile-menu-open")
        productsBtn.style.color = "#4c4c4c"
        menu.style.borderTop = "2px solid #F1F1F1"
    }
})

tabletOpenBtn.addEventListener("click", () => {
    tabletMenu.classList.add("tablet-menu-open")
    tabletOpenBtn.style.display = "none"
    tabletCloseBtn.style.display = "block"
    homeLink.style.left = "-10px"
    homeLink.style.opacity = "1"
})

tabletCloseBtn.addEventListener("click", () => {
    tabletMenu.classList.remove("tablet-menu-open")
    tabletOpenBtn.style.display = "block"
    tabletCloseBtn.style.display = "none"
    homeLink.style.left = "-400px"
    homeLink.style.opacity = 0
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 600){
        subMenu.classList.remove("mobile-menu-open")
        productsBtn.style.color = "#F1F1F1"
    }
})