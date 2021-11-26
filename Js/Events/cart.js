//*! The below code is strictly for the shopping cart - DO NOT REMOVE!*/
//* All of the below code is relevant to when an item is added to the cart */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    const removeAllBtn = document.getElementsByClassName("remove-all-btn");

    for (btn of removeAllBtn) {
        btn.addEventListener("click", removeAllItems);
    }

    cartQuantitySelector()
}


//Remove all items from the cart



function removeAllItems() {
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var counterValueInput = document.querySelector(".counter-value");
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
        counterValueInput.innerHTML = 0; 
        localStorage.clear();
    }
}


// This function is for the cart quantity selectors



function cartQuantitySelector(){
    const cartMinus = document.getElementsByClassName("cart-minus-btn");

    for (minusBtn of cartMinus) {
        minusBtn.addEventListener("click", decreaseCartQuantity);
        minusBtn.addEventListener("mousedown", () => {
            minusBtn.style.color = "#D87D4A";
        });
        minusBtn.addEventListener("mouseup", () => {
            minusBtn.style.color = "#7e7e7e";
        });
    }



    const cartPlus = document.getElementsByClassName("cart-plus-btn");

    for (plusBtn of cartPlus) {
        plusBtn.addEventListener("click", increaseCartQuantity);
        plusBtn.addEventListener("mousedown", () => {
            plusBtn.style.color = "#D87D4A";
        });
        plusBtn.addEventListener("mouseup", () => {
            plusBtn.style.color = "#7e7e7e";
        });
    }
}


// This function will decrease the quantity of the car quantity Selector


function decreaseCartQuantity(e) {
    var btn = e.target;
    if (
        btn.nextElementSibling.value === null ||
        btn.nextElementSibling.value == 1
    ) {
        btn.parentElement.parentElement.remove();
        decreaseCounter();
    } else {
        btn.nextElementSibling.value--;
        decreaseCounter();
    }
}


// This function will increase the quantity of the car quantity Selector


function increaseCartQuantity(e) {
    var btn = e.target;
    btn.previousElementSibling.value++;
    increaseCounter();
}


// This function increases the value of the cart counter


function increaseCounter() {
    const counterValueInput =
        document.getElementsByClassName("counter-value")[0];
    counterValueInput.innerHTML = parseInt(counterValueInput.innerHTML) + 1;
}


// This function decreases the value of the cart counter

function decreaseCounter() {
    const counterValueInput =
        document.getElementsByClassName("counter-value")[0];
    counterValueInput.innerHTML = parseInt(counterValueInput.innerHTML) - 1;
}