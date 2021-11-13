//Mobile nav functionality

const hamburger = document.querySelector(".hamburger-icon"),
    menu = document.querySelector(".mobile-nav-list"),
    mainContent = document.querySelector(".main-content"),
    nav = document.querySelector(".nav"), 
    cart = document.querySelector(".shopping-cart"), 
    shoppingCartIcon = document.querySelector(".cart-icon"), 
    pageTitle = document.getElementsByTagName("title")[0];


hamburger.addEventListener("click", () => {
    if (menu.classList.contains("nav-open")) {
        menu.classList.remove("nav-open");
        hamburger.style.fill = "#fff";
        document.body.style.overflow = "auto";
    } else {
        menu.classList.add("nav-open");
        hamburger.style.fill = "#D87D4A";
        document.body.style.overflow = "hidden";
    }
});

shoppingCartIcon.addEventListener("click", () => {
    if (cart.classList.contains("open-cart")) {
        cart.classList.remove("open-cart");
        shoppingCartIcon.style.fill = "#fff";
    } else {
        cart.classList.add("open-cart");
        shoppingCartIcon.style.fill = "#D87D4A";
    }
});

mainContent.addEventListener("click", () => {
    if (menu.classList.contains("nav-open")) {
        menu.classList.remove("nav-open");
        hamburger.style.fill = "#fff";
        document.body.style.overflow = "auto";
    }
});

if (pageTitle.innerHTML.includes("Home page")) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "black";
            nav.style.transition = "background-color .3s ease";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });
} else {
    nav.style.backgroundColor = "black";
    nav.style.transition = "none";
}