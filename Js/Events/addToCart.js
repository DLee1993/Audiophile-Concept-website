//*! The below code is strictly for the add to cart btns - DO NOT REMOVE!*/

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    const returnBtn = document.getElementsByClassName("return-btn");

    for (btn of returnBtn) {
        btn.addEventListener("click", () => {
            returnToPreviousPage();
        });
    }

    //Add to cart button loop
    const addToCartBtns = document.getElementsByClassName("add-to-cart-btn"),
        quantitySelectorValue =
            document.getElementsByClassName("quanitity-input");

    for (btn of addToCartBtns) {
        btn.addEventListener("click", () => {
            console.log("clicked");
            
            for (quantityValue of quantitySelectorValue) {
                quantityValue.value = 1;
                window.onload((quantityValue.value = 1));
            }
        });
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
    window.history.go(-1);
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
    const counterValueInput =
        document.getElementsByClassName("counter-value")[0];
    counterValueInput.innerHTML = count;
}
