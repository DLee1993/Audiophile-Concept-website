//*! The below code is strictly for the add to cart btns - DO NOT REMOVE!*/

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {

    //quantity selector loop

    const quantitySelectorValue = document.getElementsByClassName("quanitity-input");
    for (quantityValue of quantitySelectorValue) {
        window.onload = function(){
            quantityValue.value = 1;
        };
    }

    //Go back button loop

    const returnBtn = document.getElementsByClassName("return-btn");

    for (btn of returnBtn) {
        btn.addEventListener("click", () => {
            returnToPreviousPage();
        });
    }

    //Add to cart button loop
    const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

    for (btn of addToCartBtns) {
        btn.addEventListener("click", addToCartClicked);
    }

    //quantity selector minus btn
    const minus = document.getElementsByClassName("minus-btn");

    for (minusBtn of minus) {
        minusBtn.addEventListener("click", decreaseQuantity);
        minusBtn.addEventListener("mousedown", () => {
            minusBtn.style.color = "#D87D4A";
        });
        minusBtn.addEventListener("mouseup", () => {
            minusBtn.style.color = "#7e7e7e";
        });
    }

    //quantity selector plus btn
    const plus = document.getElementsByClassName("plus-btn");

    for (plusBtn of plus) {
        plusBtn.addEventListener("click", increaseQuantity);
        plusBtn.addEventListener("mousedown", () => {
            plusBtn.style.color = "#D87D4A";
        });
        plusBtn.addEventListener("mouseup", () => {
            plusBtn.style.color = "#7e7e7e";
        });
    }

    cartCounter();
}


function returnToPreviousPage() {
    window.location= document.referrer;
}

function decreaseQuantity(e) {
    var btn = e.target;
    if (
        btn.nextElementSibling.value === null ||
        btn.nextElementSibling.value == 1
    ) {
        btn.nextElementSibling.value = 1;
    } else {
        btn.nextElementSibling.value--;
    }
}

function increaseQuantity(e) {
    var btn = e.target;
    btn.previousElementSibling.value++;
}


function cartCounter() {
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var count = cartItems.childElementCount;
    var counterValueInput = document.querySelector(".counter-value");
    var cartQuantitySelector = document.getElementsByClassName("cart-quanitity-input");
    for(cartQuantity of cartQuantitySelector){
        counterValueInput.innerHTML = count
    }
}


function addToCartClicked(e){
    let productList = []; 
    if(typeof(Storage) !== 'undefined'){
        let product = {
            name: e.target.parentElement.parentElement.querySelector(".product-name").id, 
            // The below price element needed to be accessed this way due to additional children with certain product parent elements
            price: e.target.parentElement.parentElement.querySelector(".product-price").innerHTML, 
            img: e.target.parentElement.parentElement.parentElement.children[0].baseURI,
            quantityValue: e.target.parentElement.children[0].children[1].value, 
            number: 1
        };  
        localStorage.setItem("productList", JSON.stringify(product)); 
    }
}