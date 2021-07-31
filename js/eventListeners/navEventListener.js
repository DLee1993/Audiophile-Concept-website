const hamburger = document.querySelector(".hamburger"); 
const menu = document.querySelector(".nav-list"); 

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open"); 
}); 
