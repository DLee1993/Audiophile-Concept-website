const testbtn = document.querySelector(".button"); 
const mobileMenu = document.querySelector(".nav-bar"); 

testbtn.addEventListener("click", () => {
   if(mobileMenu.classList.contains("menu-open")){
    mobileMenu.classList.remove("menu-open")
   } else {
    mobileMenu.classList.add("menu-open")
   }
})