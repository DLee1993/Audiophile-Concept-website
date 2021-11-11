//*! The below code is strictly for the shopping cart - DO NOT REMOVE!*/

if(document.readyState === 'loading'){
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}; 

function ready(){
    const removeAllBtn = document.getElementsByClassName("remove-all-btn"); 

    for(btn of removeAllBtn){
        btn.addEventListener("click", removeAllItems)
    }

    const minus = document.getElementsByClassName("cart-minus-btn"); 

    for(minusBtn of minus){
        minusBtn.addEventListener("click", decreaseQuantity)
        minusBtn.addEventListener("mousedown", () => {
            minusBtn.style.color = "#D87D4A"
        })
        minusBtn.addEventListener("mouseup", () => {
            minusBtn.style.color = "#7e7e7e"
        })
    }

    //quantity selector plus btn
    const plus = document.getElementsByClassName("cart-plus-btn"); 

    for(plusBtn of plus){
        plusBtn.addEventListener("click", increaseQuantity)
        plusBtn.addEventListener("mousedown", () => {
            plusBtn.style.color = "#D87D4A"
        })
        plusBtn.addEventListener("mouseup", () => {
            plusBtn.style.color = "#7e7e7e"
        })
    }
}; 


function removeAllItems(){
    var cartItems = document.getElementsByClassName("cart-items")[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
        cartCounter()
    }
}; 


function cartCounter(){
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var count = cartItems.childElementCount;
    const counterValueInput = document.getElementsByClassName("counter-value")[0];
    counterValueInput.innerHTML = count; 
};

function quantityChanged(){
    console.log("it worked")
}