const hamburger = document.querySelector(".hamburger-icon"), 
menu = document.querySelector(".mobile-nav-list"), 
mainContent = document.querySelector(".main-content")

hamburger.addEventListener("click", () => {
    if(menu.classList.contains("nav-open")){
        menu.classList.remove("nav-open")
    } else{
        menu.classList.add("nav-open")
    }
})

mainContent.addEventListener("click", () => {
    if(menu.classList.contains("nav-open")){
        menu.classList.remove("nav-open")
    }
})