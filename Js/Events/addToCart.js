if(document.readyState === 'loading'){
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}; 

function ready(){

    //Add to cart button loop
    const addToCartBtns = document.getElementsByClassName("add-to-cart-btn"); 

    for(btn of addToCartBtns){
        btn.addEventListener("click", () => {
            console.log("clicked")
        })
    }

    //quantity selector minus btn
    const minus = document.getElementsByClassName("minus-btn"); 

    for(minusBtn of minus){
        minusBtn.addEventListener("click", decreaseQuantity)
    }

    //quantity selector plus btn
    const plus = document.getElementsByClassName("plus-btn"); 

    for(plusBtn of plus){
        plusBtn.addEventListener("click", increaseQuantity)
    }
}

function decreaseQuantity(e){
    var btn = e.target
    if(btn.nextElementSibling.value === null || btn.nextElementSibling.value == 1){
        btn.nextElementSibling.value = 1
    } else {
        btn.nextElementSibling.value--
    }
}

function increaseQuantity(e){
    var btn = e.target
    btn.previousElementSibling.value++
}