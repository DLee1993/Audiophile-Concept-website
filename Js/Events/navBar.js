const hamburger = document.querySelector(".hamburger-icon"), 
menu = document.querySelector(".mobile-nav-list"), 
mainContent = document.querySelector(".main-content")

hamburger.addEventListener("click", () => {
    if(menu.classList.contains("nav-open")){
        menu.classList.remove("nav-open")
        hamburger.style.fill = "#fff"
    } else{
        menu.classList.add("nav-open")
        hamburger.style.fill = "#D87D4A"
    }
})

mainContent.addEventListener("click", () => {
    if(menu.classList.contains("nav-open")){
        menu.classList.remove("nav-open")
    }
})