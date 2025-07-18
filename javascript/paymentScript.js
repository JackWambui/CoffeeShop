const submitPaymentBtn     = document.querySelector(".js-submit-payment-details-btn");
let firstName = document.querySelector(".js-first-name");
let lastName = document.querySelector(".js-last-name");
let cardSecurityCode       = document.querySelector(".js-security-code");
let cardExpirationDetails  = document.querySelector(".js-card-expiration");
let cardAccountNumber      = document.querySelector(".js-card-number");
const paymentFormContainer = document.querySelector(".js-order-payments");
const paymentRadioOptions = document.querySelectorAll(".radio-option input[type='radio']");
let selectedPaymentOption ="";

// const paymentOptionsArray = Array.from(paymentRadioOptions);
// let selectedPaymentOption ="";
// paymentOptionsArray.forEach(function(optionChecked){
//     if(optionChecked.checked){
//         selectedPaymentOption = (optionChecked.value).trim();
//     }
// });

// console.log(selectedPaymentOption);

function handleOrderPayments(event){
    event.preventDefault();
    handleFormValidation();
    // processPaymentDetails();
}

async function processPaymentDetails(){
    // const paymentRadioOptions = document.querySelectorAll(".radio-option input[type='radio']");
    let firstNameValue = ((firstName.value).trim()).toLowerCase();
    let lastNameValue = ((lastName.value).trim()).toLowerCase();
    let paymentCardNumberValue = (cardAccountNumber.value).trim();
    let cardSecurityCodeVal = (cardSecurityCode.value).trim();
    let cardExpirationDetailsValue = (cardExpirationDetails.value).trim();
    // let totalOrderAmount = (document.querySelector(".js-total-order-price").innerText).trim();
    let totalSumOrderAmount = 0;

    const shoppingCartDets = getShoppingCartDetails();

    shoppingCartDets.forEach(function(itemOrdered){
        let orderedQty = itemOrdered.quantity;
        let productPrice = itemOrdered.price;
        let totalOrderCost = orderedQty * productPrice;
        // console.log(orderedQty,'',productPrice,'',totalOrderCost);
        totalSumOrderAmount += totalOrderCost;
    });

    // console.log(totalSumOrderAmount);
    const paymentOptionsArray = Array.from(paymentRadioOptions);
    // let selectedPaymentOption ="";

    paymentOptionsArray.forEach(function(optionChecked){
        if(optionChecked.checked){
            selectedPaymentOption = (optionChecked.value).trim();
        }
    });
    console.log(selectedPaymentOption);

    const customerBankInfo = {
        paymentOptionDB:selectedPaymentOption,
        firstNameDB:firstNameValue,
        lastNameDB:lastNameValue,
        cardNumberDB:paymentCardNumberValue,
        cardSecurityCodeDB:parseInt(cardSecurityCodeVal,10),
        cardExpirationDetailsDB:cardExpirationDetailsValue,
        orderTotalAmountDB:parseFloat(totalSumOrderAmount)
    };

    const bankURL = "../php/bankDetails.php";
    const response = await fetch(bankURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(customerBankInfo)
    });

    const responseData = await response.json();
    let bankResponse = "";

    for(let key in responseData){
        bankResponse = responseData[key];
    }

    if(bankResponse === "Payment is Approved"){
        processOrder();
    }else{
        alertMessagesFunc("error", bankResponse);
        // setTimeout(function(){
        //     alertMessagesFunc("error", bankResponse);
        // },1);
    }
} 
// console.log("Value",selectedPaymentOption);

//Test Code --- 1
const shoppingCartLocalStorage = getShoppingCartDetails();

async function processOrder(){
    try{
         const orderedItems = shoppingCartLocalStorage;
         const clientOrdersUrl = "../php/clientOrders.php";
         const orderTable = document.querySelector(".js-table");
         const orderDivFooter = document.querySelector(".div-footer");
         
         //Test Code
         // console.log("Selected Option is",selectedPaymentOption);
         for(let rows = 0;rows < orderedItems.length; rows++){
            orderedItems[rows].modeOfPayment = selectedPaymentOption;
         }
        //  console.log(orderedItems);
         const orderResponse = await fetch(clientOrdersUrl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(orderedItems)
         }); 

         if(!orderResponse.ok){
            throw new Error(`Error Status Code ${orderResponse.status} and Message is ${orderResponse.statusText}`);
         }

         const orderFeedback = await orderResponse.json();
         localStorage.removeItem("cart");
         paymentFormContainer.classList.remove("js-class-block");
         paymentFormContainer.classList.add("js-class-none");
         orderTable.remove();
         orderDivFooter.remove();
         //Try Again!!!
         updateCartNumber();
         alertMessagesFunc("success", orderFeedback);
    }catch(error){
        console.error(error.message);
    }
}

// console.log(selectedPaymentOption);

function handleFormValidation(){
    //Try Again - Remember
    // if(selectedPaymentOption === ""){
    //     alert("A payment mode must be selected.");
    // }

    if(firstName.value === ""){
        alert("First Name must be provided.");
        return false;
    }else if (lastName.value === ""){
        alert("Last Name must be provided.");
        return false;
    }else if(cardAccountNumber.value === ""){
        alert("Card Account Number must be provided.");
        return false;
        // console.log(cardAccountNumber.value);
    }else if(cardSecurityCode.value === ""){
        alert("Card Security Code must be provided and contain numbers.");
        return false;
    }
    else if(cardExpirationDetails.value === ""){
        alert("Card Expiration Number must be provided.");
        return false;
    }
    processPaymentDetails(); 
}

//Validation test, Try Again!! - try to handle the change on individual input field
function handleSecurityCodeValidation(){
    let cardSecurityCodeValue = cardSecurityCode.value;
    let cardSecurityCodeLength = cardSecurityCodeValue.length;
    // console.log(cardSecurityCodeValue);
    if(cardSecurityCodeLength > 3){
        alert("Card Security Code (CVC) must contain 3 numbers only.");
        return false;
    }else if(isNaN(cardSecurityCodeValue)){
        alert("Card Security Code (CVC) must contain numbers only.");
        return false;
    }
    // console.log("Security Code must contain 3 numbers only.");
}
cardSecurityCode.addEventListener("input",handleSecurityCodeValidation);
//Event Listener
submitPaymentBtn.addEventListener("click",handleOrderPayments);



