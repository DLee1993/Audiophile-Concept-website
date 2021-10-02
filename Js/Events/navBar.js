const categories = document.getElementById("category-link");
const categoriesSVG = document.querySelector(".products-svg");
const categoriesText = document.querySelector(".catLink-text");
const subList = document.querySelector(".product-list");
const main = document.querySelector(".main-content");

categories.addEventListener("click", () => {
    if (subList.classList.contains("open-subList")) {
        subList.classList.remove("open-subList");
        categoriesSVG.style.fill = "#fff";
        categoriesText.style.color = "#F1F1F1";
    } else {
        subList.classList.add("open-subList");
        categoriesSVG.style.fill = "#4c4c4c";
        categoriesText.style.color = "#4c4c4c";
    }
});

main.addEventListener("click", () => {
    subList.classList.remove("open-subList");
    categoriesSVG.style.fill = "#fff";
    categoriesText.style.color = "#F1F1F1";
});
