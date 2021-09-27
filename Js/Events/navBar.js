const openbtn = document.querySelector(".open-menu"); 
const menu = document.querySelector(".mobile-navbar");
const closebtn = document.querySelector(".close-menu"); 

openbtn.addEventListener("click", () => { 
    menu.classList.add("navbar-open")
    openbtn.style.display = "none";
    document.body.style.overflow = "hidden"
})

closebtn.addEventListener("click", () => {
    menu.classList.remove("navbar-open")
    openbtn.style.display = "flex";
})


//https://youtu.be/2btuhCYf7zw?t=274