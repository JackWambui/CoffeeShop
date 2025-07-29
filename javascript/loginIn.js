const btnSigninBtns = document.querySelector(".sign_in_btn");

function handleCustomerInformation(event){
    event.preventDefault();
    //Calling our Api here
    postCustomerInfor();
    // console.log("hello");
}

btnSigninBtns.addEventListener("click",handleCustomerInformation);