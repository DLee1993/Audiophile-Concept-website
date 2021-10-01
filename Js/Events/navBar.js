const categories = document.getElementById("category-link"); 
const subList = document.querySelector(".product-list"); 
const main = document.querySelector(".main-content"); 

categories.addEventListener("click", () => {
    if(subList.classList.contains("open-subList")){
        subList.classList.remove("open-subList")
        categories.style.backgroundColor = "#D87D4A"
    } else {
        subList.classList.add("open-subList")
        categories.style.backgroundColor = "#8a5130"
    }
});

main.addEventListener("click", () => {
    subList.classList.remove("open-subList")
    categories.style.backgroundColor = "#D87D4A"
});