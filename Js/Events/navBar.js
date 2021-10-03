const navbar = document.querySelector(".mobile-tablet-navbar"),
        main = document.querySelector(".main-content");

navbar.addEventListener("click", () => {
    if (navbar.classList.contains("nav-open")) {
        navbar.classList.remove("nav-open");
    } else {
        navbar.classList.add("nav-open");
    }
});


main.addEventListener("click", () => {
    if(navbar.classList.contains("nav-open")){
        navbar.classList.remove("nav-open")
    }
})