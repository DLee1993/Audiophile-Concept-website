const productsBtn = document.querySelector(".subMenu-btn"), 
    subMenu = document.querySelector(".mobile-subMenu")

productsBtn.addEventListener("click", () => {
    if(subMenu.classList.contains("menu-open")){
        subMenu.classList.remove("menu-open")
    } else {
        subMenu.classList.add("menu-open")
    }
})