function getShoppingCartDetails(){
    const shoppingBasket = JSON.parse(localStorage.getItem("cart"));
    return shoppingBasket;
}

function updateCartNumber(){
    const totalOrderNumber = document.querySelector(".js-order-number");

    if(checkShoppingCartNotEmpty() === true){
        const totalOrdersCart = getShoppingCartDetails().length;
        // console.log(getShoppingCartDetails());
        if(totalOrdersCart > 0){
            totalOrderNumber.innerText = totalOrdersCart;
        }
    }
}

window.addEventListener("DOMContentLoaded",updateCartNumber);
   
// console.log(Array.isArray(totalOrdersCart));
// console.log(getShoppingCartDetails().length);

const ordersFeaturesContainer = document.querySelector(".ordersFeatures");

if(ordersFeaturesContainer){
    const tableElement = document.createElement("table");
    tableElement.classList.add("js-table");

    ordersFeaturesContainer.append(tableElement);
    const ordersInformation = getShoppingCartDetails();
    // console.log(ordersInformation);

    if(checkShoppingCartNotEmpty() === true){
        tableElement.innerHTML = `
        <thead>
            <tr>
                <th>
                    Order
                </th>
                <th>
                    Product No
                </th>
                <th>
                    Image
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Amount Due
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
    `;
    const tBody = document.createElement("tbody");
    tBody.classList.add("js-cart-tbody");
    tableElement.append(tBody);
    ordersInformation.forEach(function(ord,index){
        let productPricing = ord.price;
        let productQuantities = ord.quantity;
        let totalPriceDue = (productPricing * productQuantities).toFixed(2);
        let productNam = ord.name;
        let productId = ord.id;

        const trElement = document.createElement("tr");
        trElement.setAttribute("data-id",productId);

        trElement.innerHTML = `
            <td>
                ${index = index + 1}
            </td>
            <td>
                ${productId}
            </td>
            <td>
                <img src="${ord.image}" alt=${productNam}>
            </td>
            <td>
                ${productNam}
            </td>
            <td>
                $<span class=order-price>
                    ${productPricing.toFixed(2)}
                </span>
            </td>
            <td>
                ${productQuantities}
            </td>
            <td>
                $<span class=order-price>
                    ${totalPriceDue}
                </span>
            </td>
            <td class="button-action-collection">
                <button type=button class="edit-button btn-success">
                    Edit
                </button>
                <button type=button class="delete-button btn-danger">
                    Delete
                </button>
            </td>
        `;
        tBody.append(trElement);
        });

        // console.log(ordersFeaturesContainer);
        // testApp(ordersFeaturesContainer);

        const shoppingCartFeat = document.querySelector(".shopping-cart-features");

        const additionalCartDivEl = document.createElement("div");
        additionalCartDivEl.classList.add("div-footer");
        additionalCartDivEl.innerHTML = `
            <div>
                Total Price:
                <span class="js-total-order-price"></span>
            <div>
            <div class="js-shopping-cart-button-container">
                <button class="submit-btn btn-success js-btn-1">
                    Submit Order
                </button>

                <button class="clear-btn btn-danger js-btn-1">
                    Clear Shopping Cart
                </button>
            </div>
        `;
        shoppingCartFeat.append(additionalCartDivEl); 

        const shoppingCartBtnCont = document.querySelector(".js-shopping-cart-button-container");

        function handleShoppingAction(event){
            const targetEl = event.target;

            if(targetEl.classList.contains("submit-btn")){
                console.log("order submitted.")
            }else if(targetEl.classList.contains("clear-btn")){
                clearShoppingCartDetails();
                updateCartPageDetails();
                // console.log("cart has been emptied out.")
            }
        }

        shoppingCartBtnCont.addEventListener("click",handleShoppingAction);
    }else{
        updateCartPageDetails();
        // const emptyCartH2El = document.createElement("h2");
        // emptyCartH2El.innerText = "The Cart is empty,Please go ahead and shop.";
        // ordersFeaturesContainer.append(emptyCartH2El);   
    }
}

function clearShoppingCartDetails(){
   localStorage.clear();
   window.location.reload();
}

function checkShoppingCartNotEmpty(){
    return (Array.isArray(getShoppingCartDetails()));
}
// console.log(typeof checkShoppingCartNotEmpty());

function updateCartPageDetails(){
    const emptyCartH2El = document.createElement("h2");
    emptyCartH2El.innerText = "The Cart is empty,Please go ahead and shop.";
    ordersFeaturesContainer.append(emptyCartH2El);   
}

const cartTableBody = document.querySelector(".js-cart-tbody");

function performEditOrDeleteAction(event){
    const targetElement = event.target;
    let targetParentElement = targetElement.parentElement.parentElement;
    const tableRowId = parseInt(targetParentElement.getAttribute("data-id"),10);
    console.log(tableRowId);
            
    if(targetElement.classList.contains("edit-button")){
        console.log("edit");
    }else if(targetElement.classList.contains("delete-button")){
        console.log("delete order");
        targetParentElement.remove();
        updateShoppingCartLocalStorage(tableRowId);
    }
}

//Try Again
function updateShoppingCartLocalStorage(orderId){
    getShoppingCartDetails().forEach(function(testId,testIndex){
        if(testId.id === orderId){
            // console.log(`${testId.name}`);
            console.log(localStorage.remove(testIndex));
            // getShoppingCartDetails().splice(testIndex,1);
        }
    });
}

cartTableBody.addEventListener("click",performEditOrDeleteAction);



