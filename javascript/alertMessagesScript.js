function alertMessagesFunc(alertType,message){
    const alertMessageSection = document.querySelector(".alert-message-section");
    const spanEl = document.createElement("span");
    spanEl.className = "alert-messages";
    spanEl.classList.add(alertType);
    alertMessageSection.append(spanEl);

    for(key in message){
        const spanElTextNode = document.createTextNode(message[key]);
        spanEl.append(spanElTextNode);
    }
}
