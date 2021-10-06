const test = document.querySelector(".nav"), 
menu = document.querySelector(".navbar"), 
mainContent = document.querySelector(".main-content")

test.addEventListener("click", () => {
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