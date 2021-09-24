const navbar = document.querySelector(".mobile-navbar"); 

navbar.addEventListener("click", () => {
    navbar.style.height = "90%"
    navbar.style.transition = "all .5s ease";
})