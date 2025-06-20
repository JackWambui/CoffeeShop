// let paymentOption = document.querySelector(".js-payment-options");
const submitPaymentBtn = document.querySelector(".js-submit-payment-details-btn");

let cardSecurityCode = document.querySelector(".js-security-code");
let cardExpirationDetails = document.querySelector(".js-card-expiration");
let cardAccountNumber = document.querySelector(".js-card-number");
let totalOrderAmount = (document.querySelector(".js-total-order-price").innerText).trim();

function handleOrderPayments(event){
    event.preventDefault();

    const paymentRadioOptions = document.querySelectorAll(".radio-option input[type='radio']");
    let firstName = ((document.querySelector(".js-first-name").value).trim()).toLowerCase();
    let lastName = ((document.querySelector(".js-last-name").value).trim()).toLowerCase();
    let paymentCardNumberValue = (cardAccountNumber.value).trim();
    let cardSecurityCodeVal = (cardSecurityCode.value).trim();
    let cardExpirationDetailsValue = (cardExpirationDetails.value).trim();

    const paymentOptionsArray = Array.from(paymentRadioOptions);
    let selectedPaymentOption ="";
    paymentOptionsArray.forEach(function(optionChecked){
        if(optionChecked.checked){
            selectedPaymentOption = (optionChecked.value).trim();
        }
    });

    // console.log(selectedPaymentOption,"",firstName,"",lastName,"",paymentCardNumberValue,"",cardSecurityCodeVal,"",cardExpirationDetailsValue);

    const clientPaymentInformation = {
        dbPaymentOption:selectedPaymentOption,
        dbFirstName:firstName,
        dbLastName:lastName,
        dbCardNumber:paymentCardNumberValue,
        dbCardSecurityCode:cardSecurityCodeVal,
        dbCardExpirationDate:cardExpirationDetailsValue,
        dbTotalOrderAmount:totalOrderAmount
    } ;

    // console.log(clientPaymentInformation);
    const paymentFormData = new FormData();
    paymentFormData.append("clientPaymentDetails",JSON.stringify(clientPaymentInformation));
    if(paymentFormData.has("clientPaymentDetails")){
        paymentFormData.forEach(function(value){
            console.log(value);
        });
        //Post
    }else{
        //error details
        console.log("failed");
    }  

    const shoppingCartLocalStorage = getShoppingCartDetails();
    // console.log(shoppingCartLocalStorage);

    const orderInformationFormData = new FormData();
    orderInformationFormData.append("orderInformation",JSON.stringify(shoppingCartLocalStorage));

    if(orderInformationFormData.has("orderInformation")){
        orderInformationFormData.forEach(function(value){
            console.log(value);
        });
    }else{
        console.log("empty cart");
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



