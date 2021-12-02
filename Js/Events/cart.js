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

    const returnToHome = document.querySelector(".return-home-btn"); 
    returnToHome.addEventListener("click", resetCart); 

    cartQuantitySelector();
    updateCartTotal();
}

//Remove all items from the cart

function removeAllItems() {
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var counterValueInput = document.querySelector(".counter-value");
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
        counterValueInput.innerHTML = 0;
        document.getElementsByClassName("cart-total-value")[0].innerText =
            "$" + 0;
        localStorage.clear();
    }
}

// This function is for the cart quantity selectors

function cartQuantitySelector() {
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
        //below code removes the item from localstorage

        let itemRemoved =
            btn.parentElement.parentElement.querySelector(
                ".cart-item-name"
            ).innerHTML;
        let productList = [];
        JSON.parse(localStorage.getItem("productList")).map((data) => {
            if (data.name != itemRemoved) {
                productList.push(data);
            }
        });
        localStorage.setItem("productList", JSON.stringify(productList));
        if (localStorage.getItem("productList").length < 3) {
            localStorage.clear();
        }

        //below code removes the cart row
        btn.parentElement.parentElement.remove();

        updateCartTotal();
        decreaseCounter();
    } else {
        btn.nextElementSibling.value--;
        decreaseCounter();
        updateCartTotal();
    }
}

// This function will increase the quantity of the car quantity Selector

function increaseCartQuantity(e) {
    var btn = e.target;
    btn.previousElementSibling.value++;
    increaseCounter();
    updateCartTotal();
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

function updateCartTotal() {
    const cartItems = document.getElementsByClassName("cart-items")[0];
    const cartRow = cartItems.getElementsByClassName("cart-row");
    var total = 0;
    var grandTotal = 0;
    var shippingCost = 50; 
    var vatIncluded = 20; 
    for (var i = 0; i < cartRow.length; i++) {
        const cartRowPrice = cartRow[i]
            .querySelector(".cart-item-price")
            .innerHTML.replace("$", "");
        const cartRowQuantity = cartRow[i].getElementsByClassName(
            "cart-quantity-input"
        )[0];
        const quantity = cartRowQuantity.value;
        total = total + parseInt(cartRowPrice.replace(",", "")) * quantity;
    }
    total = Math.round(total * 100) / 100;
    if(total === 0){
        grandTotal = 0
    } else {
        grandTotal = total + shippingCost;
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    document.getElementsByClassName("cart-total-value")[0].innerText =
        "$" + numberWithCommas(total);
    document.getElementsByClassName("summary-total-value")[0].innerText =
        "$" + numberWithCommas(total);
    document.getElementsByClassName("VAT-cost-value")[0].innerText = "$" + (vatIncluded / 100) * total; 
    document.getElementsByClassName("grand-total-cost-value")[0].innerText = "$" + numberWithCommas(grandTotal); 
}


function resetCart(){
    localStorage.clear();
}