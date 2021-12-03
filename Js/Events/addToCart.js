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
    if(localStorage.getItem("productList") !== null){
        loadCart();
    }

    cartCounter();

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

    if (count == 0) {
        counterValueInput.innerHTML = 0;
    }
}


function addToCartClicked(e) {
    let productList = [];

    if (typeof Storage != undefined) {
        let product = {
            name: e.target.parentElement.parentElement.querySelector(
                ".product-name"
            ).id,
            image: e.target.parentElement.parentElement.parentElement.querySelector(
                ".product-image"
            ).children[0].src,
            price: e.target.parentElement.previousElementSibling.innerHTML.replace(
                "$",
                ""
            ),
            cartQuantity: e.target.parentElement.children[0].querySelector(".quantity-input").value
        };
        if (JSON.parse(localStorage.getItem("productList")) === null) {
            productList.push(product);
            localStorage.setItem("productList", JSON.stringify(productList));
        } else {
            const localStorageItems = JSON.parse(
                localStorage.getItem("productList")
            );
            localStorageItems.map((data) => {
                if (product.name == data.name) {
                    alert("Quantity Chng");
                    e.preventDefault()
                } else {
                    productList.push(data);
                }
            });
            productList.push(product);
            localStorage.setItem("productList", JSON.stringify(productList));
        }
    }
    window.location.reload();
}


function loadCart() {
    const localStorageItems = JSON.parse(localStorage.getItem("productList"));
    localStorageItems.map((data) => {
        const cartItems = document.querySelector(".cart-items"); 
        var cartRow = document.createElement("section"); 
        cartRow.classList.add("cart-row"); 
        cartRowContent = `
        <img src="${data.image}" alt=""></img>
                    <section class="nameAndPrice">
                        <p class="cart-item-name">${data.name}</p>
                        <p class="cart-item-price">$${data.price}</p>
                    </section>
                    <section class="cart-quantity-selector">
                        <button class="cart-minus-btn">-</button>
                        <input type="number" value="${data.cartQuantity}" aria-label="cart-item-quantity" class="cart-quantity-input">
                        <button class="cart-plus-btn">+</button>
                    </section>`; 
        cartRow.innerHTML = cartRowContent; 
        cartItems.append(cartRow); 
    });
    cartCounter();
}
