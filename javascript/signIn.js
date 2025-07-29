const btnSigninBtns = document.querySelector(".sign_in_btn");

function handleCustomerInformation(event){
    event.preventDefault();
    //Calling our Api here
    postCustomerInfor();
    // console.log("hello");
    // console.log("hello");
}

btnSigninBtns.addEventListener("click",handleCustomerInformation);


//Api Connection for sending data to php file from javaScript above
async function postCustomerInfor(){
     //Variable declaration
    const username = (document.querySelector(".username").value).trim();
    const email = (document.querySelector(".Email").value).trim();
    const password = (document.querySelector(".Password").value).trim();

    const customerInformationObject = {
        usernamePHP:username,
        emailPHP:email,
        passwordPHP:password
    };

    console.log(customerInformationObject);



    const urlCustomerLink = "../php/signIn.php";
    
    //Gets the fetch api response
    const response = await fetch(urlCustomerLink,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(customerInformationObject)
    });

    const responseData = await response.json();
    console.log(responseData);
    // console.log(responseData);
    // for(let key in responseData){
    //     alert(responseData[key]);
    // }
    window.location.href ="../html/menu.html";

}