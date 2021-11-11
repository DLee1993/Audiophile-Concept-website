//* The below code is strictly to change the background color of the checkout page, this is done according to design spec*/
if (document.URL.includes("checkout.html")) {
    document.body.style.backgroundColor = "#F1F1F1";
    document.querySelector(".flex-container").classList.add("body-flex")
}

//* The below code is for the payment methods */
const eMoney = document.querySelector(".e-money"),
    eMoneySelected = document.querySelector(".e-money .inner-circle"),
    eMoneyDetails = document.querySelector(".e-money-details"),
    cash = document.querySelector(".cash"),
    cashSelected = document.querySelector(".cash .inner-circle"),
    cashDetails = document.querySelector(".cash-details");

document.addEventListener("DOMContentLoaded", () => {
    eMoneySelected.style.backgroundColor = "#D87D4A";
    eMoney.style.border = "1px solid #D87D4A"
    eMoneyDetails.style.display = "flex";
});

cash.addEventListener("click", () => {
    eMoneySelected.style.backgroundColor = "transparent";
    eMoneyDetails.style.display = "none";
    cashSelected.style.backgroundColor = "#D87D4A"
    cashDetails.style.display = "flex"
    cash.style.border = "1px solid #D87D4A"
    eMoney.style.border = "1px solid #cfcfcf"
});

eMoney.addEventListener("click", () => {
    eMoneySelected.style.backgroundColor = "#D87D4A";
    eMoneyDetails.style.display = "flex";
    cashSelected.style.backgroundColor = "transparent"
    cashDetails.style.display = "none"
    cash.style.border = "1px solid #cfcfcf"
    eMoney.style.border = "1px solid #D87D4A"
});


const payBtn = document.querySelector(".checkout-btn"), 
fadedBG = document.querySelector(".order-complete-faded-bg")

payBtn.addEventListener("click", pay)


function pay(){
    //*? The below code for the pay function will be modified to include a check to ensure form validation is correct before proceeding */
    const orderConfirmed = document.querySelector(".order-complete"); 
    orderConfirmed.style.display = "flex"
    fadedBG.style.display = "block"
    orderConfirmed.style.pointerEvents = "all"
    document.body.style.pointerEvents = "none"
    document.body.style.overflow = "hidden"
}
