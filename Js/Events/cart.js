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