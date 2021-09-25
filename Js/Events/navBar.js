const btn = document.querySelector(".open-menu"); 
const menu = document.querySelector(".mobile-navbar");

btn.addEventListener("click", () => { 
    if(menu.classList.contains("navbar-open")){
        menu.classList.remove("navbar-open")
    } else {
        menu.classList.add("navbar-open")
        btn.style.display = "none";
    }
})