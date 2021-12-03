//*! The below code is strictly for the shopping cart - DO NOT REMOVE!*/
//* All of the below code is relevant to when an item is added to the cart */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    updateSummaryTotal();
}

function updateSummaryTotal() {
    const cartItems = document.getElementsByClassName("cart-items")[0];
    const cartRow = cartItems.getElementsByClassName("cart-row");
    var total = 0;
    var grandTotalValue = 0;
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
        grandTotalValue = 0
    } else {
        grandTotalValue = total + shippingCost;
    }
    var vatTotal = numberWithCommas(parseInt((vatIncluded / 100) * total)); 
    const summaryTotal = document.querySelector(".summary-total-value"); 
    const vatCost = document.querySelector(".VAT-cost-value"); 
    const grandTotal = document.querySelector(".grand-total-cost-value")
    document.getElementsByClassName("cart-total-value")[0].innerText = "$" + numberWithCommas(total);
    summaryTotal.innerHTML = "$" + numberWithCommas(total);
    vatCost.innerHTML = "$" + vatTotal; 
    grandTotal.innerHTML = "$" + numberWithCommas(grandTotalValue); 
}