const productsBtn = document.querySelector(".subMenu-btn"), 
    menu = document.querySelector(".mobile-navigation"),
    subMenu = document.querySelector(".mobile-subMenu")

productsBtn.addEventListener("click", () => {
    if(subMenu.classList.contains("menu-open")){
        subMenu.classList.remove("menu-open")
        menu.style.borderTop = "none"
    } else {
        subMenu.classList.add("menu-open")
        menu.style.borderTop = "2px solid #F1F1F1"
    }
})