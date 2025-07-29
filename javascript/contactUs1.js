const jsSubmitFeedbackBtn = document.querySelector(".submitExperience-btns");

jsSubmitFeedbackBtn.addEventListener("click",postFeedback);

function postFeedback(event){
    event.preventDefault();
    console.log("heelo");
    postFeedbacktoDB();
}

jsSubmitFeedbackBtn.addEventListener("click",postFeedback);

  async function postFeedbacktoDB(){
    const customerName    = document.querySelector(".js_name").value;
    const customerEmail   = document.querySelector(".js_email").value;
    const customerPhone   = document.querySelector(".js_phone").value;
    const customerMessage = document.querySelector(".js_message").value;

    const feedbackObje = {
        customerNamePHP:customerName,
        customerEmailPHP:customerEmail,
        customerPhonePHP:customerPhone,
        customerMessagePHP:customerMessage
    };

    console.log(feedbackObje);

    const URLFeedbackLink = "../php/customerFeedback.php";
    const response = await fetch(URLFeedbackLink,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(feedbackObje)
    });
    const responseData = await response.json();

    console.log(responseData);
  }
  