//*! The below code is strictly for the add to cart btns - DO NOT REMOVE!*/

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    //quantity selector loop

    const quantitySelectorValue =
        document.getElementsByClassName("quantity-input");
    for (quantityValue of quantitySelectorValue) {
        window.onload = function () {
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

// Return to previous page function

function returnToPreviousPage() {
    window.location = document.referrer;
}

// reduce the value of the product page quantity Selector

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

// increase the value of the product page quantity Selector

function increaseQuantity(e) {
    var btn = e.target;
    btn.previousElementSibling.value++;
}

/* 

the below function changes the value of the cart counter based on the quantity selector values and the amount
of child elements the cart items element has

*/

function cartCounter() {
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var count = cartItems.childElementCount;
    var counterValueInput = document.querySelector(".counter-value");
    var cartQuantitySelector = document.getElementsByClassName(
        "cart-quantity-input"
    );
    for (cartQuantity of cartQuantitySelector) {
        counterValueInput.innerHTML = count * cartQuantity.value;
    }
}

// Notes for going forward

/* 

- when add to cart is clicked ( you need to access the name, price, img and the quantity of the product)
- set all the above information into the local storage, into an abject
- get all the above information and add it to the cart row templete 


*/

function addToCartClicked(e) {}


function addItemToCart() {}; 


function removeItem(e) {
    /* itemName = e.target.parentElement.parentElement.children[1].children[0].innerHTML; */
    /* 
    
    Use an if statment to check wether the itemName = a key in the array, 
    if it does, remove that item from the local storage array
    
    */
    // This will remove the item if the cart quantity Seletor = 0
}

function updateCartTotal() {
    /* 
    This where we will update the below elements  

    - cart total

    -summary total
    -summary-grand total
    
    */
}





/*
<section class="cart-row">
                    <img src="../style/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="">
                    <section class="nameAndPrice">
                        <p class="cart-item-name">xx99 mk ||</p>
                        <p class="cart-item-price">$2999</p>
                    </section>
                    <section class="cart-quantity-selector">
                        <button class="cart-minus-btn">-</button>
                        <input type="number" value="1" aria-label="cart-quantity-value" class="cart-quantity-input">
                        <button class="cart-plus-btn">+</button>
                    </section>
                </section> 
*/