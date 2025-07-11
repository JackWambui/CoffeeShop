const submitPaymentBtn     = document.querySelector(".js-submit-payment-details-btn");
let cardSecurityCode       = document.querySelector(".js-security-code");
let cardExpirationDetails  = document.querySelector(".js-card-expiration");
let cardAccountNumber      = document.querySelector(".js-card-number");
const paymentFormContainer = document.querySelector(".js-order-payments");

//Test Code --- 1
const shoppingCartLocalStorage = getShoppingCartDetails();

async function processOrder(){
    try{
         const orderedItems = JSON.stringify(shoppingCartLocalStorage);
         const clientOrdersUrl = "../php/clientOrders.php";
         const orderTable = document.querySelector(".js-table");
         const orderDivFooter = document.querySelector(".div-footer");

         const orderResponse = await fetch(clientOrdersUrl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:orderedItems
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

function handleOrderPayments(event){
    event.preventDefault();
    processPaymentDetails();
}

async function processPaymentDetails(){
    const paymentRadioOptions = document.querySelectorAll(".radio-option input[type='radio']");
    let firstName = ((document.querySelector(".js-first-name").value).trim()).toLowerCase();
    let lastName = ((document.querySelector(".js-last-name").value).trim()).toLowerCase();
    let paymentCardNumberValue = (cardAccountNumber.value).trim();
    let cardSecurityCodeVal = (cardSecurityCode.value).trim();
    let cardExpirationDetailsValue = (cardExpirationDetails.value).trim();
    let totalOrderAmount = (document.querySelector(".js-total-order-price").innerText).trim();


    const paymentOptionsArray = Array.from(paymentRadioOptions);
    let selectedPaymentOption ="";
    paymentOptionsArray.forEach(function(optionChecked){
        if(optionChecked.checked){
            selectedPaymentOption = (optionChecked.value).trim();
        }
    });

    const customerBankInfo = {
        paymentOptionDB:selectedPaymentOption,
        firstNameDB:firstName,
        lastNameDB:lastName,
        cardNumberDB:paymentCardNumberValue,
        cardSecurityCodeDB:parseInt(cardSecurityCodeVal,10),
        cardExpirationDetailsDB:cardExpirationDetailsValue,
        orderTotalAmountDB:parseFloat(totalOrderAmount)
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
    }
}

//Validation test, Try Again!! - try to handle the change on individual input field
function handleSecurityCodeValidation(){
    let cardSecurityCodeValue = cardSecurityCode.value;
    let cardSecurityCodeLength = cardSecurityCodeValue.length;
    // console.log(cardSecurityCodeValue);
    if(cardSecurityCodeLength < 3 || cardSecurityCodeLength > 3){
        console.log("Security Code must contain 3 numbers only.");
    }
}

cardSecurityCode.addEventListener("change",handleSecurityCodeValidation);

submitPaymentBtn.addEventListener("click",handleOrderPayments);



