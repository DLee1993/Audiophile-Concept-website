const navbar = document.querySelector(".mobile-navbar"); 
const navbarBtn = document.querySelector(".hamburger-menuBtn"); 

navbarBtn.addEventListener("click", () => {
    if(navbar.classList.contains("menu-open")){
        navbar.classList.remove("menu-open")
    } else {
        navbar.classList.add("menu-open")
    }
}); 