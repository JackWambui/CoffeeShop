function getShoppingCartDetails(){
    const shoppingBasket = JSON.parse(localStorage.getItem("cart"));
    return shoppingBasket;
}

function updateCartNumber(){
    const totalOrderNumber = document.querySelector(".js-order-number");
    // const totalOrdersCart = getShoppingCartDetails().length;
    if(checkShoppingCartNotEmpty() === true){
        const totalOrdersCart = getShoppingCartDetails().length;
        // console.log(getShoppingCartDetails());
        if(totalOrdersCart > 0){
            totalOrderNumber.innerText = totalOrdersCart;
        }
    }
    //Try Again!!!!
    // else{
    //     totalOrderNumber.innerText = 0;
    // }
}

window.addEventListener("DOMContentLoaded",updateCartNumber);

const ordersFeaturesContainer = document.querySelector(".ordersFeatures");
if(ordersFeaturesContainer){
    const tableElement = document.createElement("table");
    tableElement.classList.add("js-table");

    ordersFeaturesContainer.append(tableElement);
    const ordersInformation = getShoppingCartDetails();
 
    if(checkShoppingCartNotEmpty() === true){
        tableElement.innerHTML = `
        <thead class="order-table-headings">
            <tr>
                <th>
                    
                </th>
                <th>
                    Image
                </th>
                <th>
                    Name
                </th>
                <th>
                    Product Price
                </th>
                <th>
                    Qty
                </th>
                <th>
                    Amount
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
    let totalAmountDue = 0;
    ordersInformation.forEach(function(ord,index){
        let productPricing = ord.price;
        let productQuantities = ord.quantity;
        let totalPriceDue = (productPricing * productQuantities).toFixed(2);
        let totalPriceNum = parseFloat(totalPriceDue);
        let productNam = ord.name;
        let productId = ord.id;

        totalAmountDue = totalAmountDue + totalPriceNum;
        const trElement = document.createElement("tr");
        trElement.setAttribute("data-id",productId);
        trElement.classList.add("table-row-info");

        trElement.innerHTML = `
            <td>
                ${index = index + 1}
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
        
        const shoppingCartFeat = document.querySelector(".shopping-cart-features");

        const additionalCartDivEl = document.createElement("div");
        additionalCartDivEl.classList.add("div-footer");
        additionalCartDivEl.innerHTML = `
            <div class="price-js">
                <b>Total Price:</b> $
                <span class="js-total-order-price">${(totalAmountDue).toFixed(2)}</span>
            <div>
            <div class="js-shopping-cart-button-container">
                <button class="submit-btn btn-success js-btn-1 js-submit-order-btn">
                    Submit Order
                </button>

                <button class="clear-btn btn-danger js-btn-1 js-clear-shopping-cart-btn">
                    Clear Shopping Cart
                </button>
            </div>
        `;
        shoppingCartFeat.append(additionalCartDivEl); 

        const shoppingCartBtnCont = document.querySelector(".js-shopping-cart-button-container");

        function handleShoppingAction(event){
            const targetEl = event.target;

            if(targetEl.classList.contains("submit-btn")){
                const orderPaymentContainer = document.querySelector(".js-order-payments");
                orderPaymentContainer.classList.remove("js-class-none");
            }else if(targetEl.classList.contains("clear-btn")){
                clearShoppingCartDetails();
                updateCartPageDetails();
            }
        }

        shoppingCartBtnCont.addEventListener("click",handleShoppingAction);

        const cartTableBody = document.querySelector(".js-cart-tbody");

        function performEditOrDeleteAction(event){
            const targetElement = event.target;
            let targetParentElement = targetElement.parentElement.parentElement;
            const tableRowId = parseInt(targetParentElement.getAttribute("data-id"),10);
            // console.log(tableRowId);
            if(targetElement.classList.contains("edit-button")){
                editOrderInCart(shoppingCartFeat,tableRowId);
            }else if(targetElement.classList.contains("delete-button")){
                targetParentElement.remove();
                updateShoppingCartLocalStorage(tableRowId);
                //check to see if array is empty before updating the cart body.Try Again!!
            }
        }

        cartTableBody.addEventListener("click",performEditOrDeleteAction);
    }else{
        updateCartPageDetails();
        // const emptyCartH2El = document.createElement("h2");
        // emptyCartH2El.innerText = "The Cart is empty,Please go ahead and shop.";
        // ordersFeaturesContainer.append(emptyCartH2El);   
    }
}


function editOrderInCart(shoppingCartFeater,order_id){
    getShoppingCartDetails().forEach(function(items_ordered){
        let orderItemCartID = items_ordered.id;
        let orderItemCartName = items_ordered.name;
        let orderItemCartQuantity = items_ordered.quantity;
        // console.log(items_ordered);
        if(order_id === orderItemCartID){
            const editDivEl = document.createElement("div");
            editDivEl.className = "edit-pop-up-container";
            const editFormEl = document.createElement("form");
            editFormEl.className = "edit-cart-form";
            const editFormHeading = document.createElement("h2");
            const editFormHeadingTitle = document.createTextNode("Edit Order");
            editFormHeading.append(editFormHeadingTitle);
            editDivEl.append(editFormHeading);
            editDivEl.append(editFormEl);
            editFormEl.innerHTML = `
            <div class="form-control js_order_id_info">
                <label for="js_order_id">Order ID</label>
                <input type="text" id="js_order_id" name="js_order_id_info" class="js_order_id_info" data_order_id="${orderItemCartID}" value="${orderItemCartID}" disabled>
            </div>
            <div class=form-control>
                <label for="js_order_name">Name</label>
                <input type="text" id="js_order_name" name="js_order_name_info"  class="js_order_name_info" value="${orderItemCartName}" disabled>
            </div>
            <div class=form-control>
                <label for="js_order_quantity">Quantity</label>
                <input type="text" id="js_order_quantity" name="js_order_quantity_info" class="js_order_quantity_info" value="${orderItemCartQuantity}">
            </div>
            <div class="form-control edit_cancel_btn_collection">
                <input type="submit" class="js_submit_update_order_btn btn-success edit_cancel_order_button" value="Update">
                <input type="button" class="js_cancel_update_order_btn btn-danger edit_cancel_order_button" value="Cancel">
            </div>
            `;
            shoppingCartFeater.append(editDivEl);

            const editCancelBtnCollection = document.querySelector(".edit_cancel_btn_collection");

            editCancelBtnCollection.addEventListener("click",handleEditCancelOrderUpdate);
        }
    });
    // console.log("yes");  
}

function handleEditCancelOrderUpdate(event){
    event.preventDefault();
    const targetElTriggered = event.target;
    if(targetElTriggered.classList.contains("js_submit_update_order_btn")){
        let orderIdEl = targetElTriggered.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
        // console.log(orderIdEl);
        if(orderIdEl.classList.contains("js_order_id_info")){
            let cart_Order_ID = parseInt(orderIdEl.firstElementChild.nextElementSibling.getAttribute("data_order_id"),10);
            updateOrderQty(cart_Order_ID);
        }
        // updateOrderQty();
    }else if(targetElTriggered.classList.contains("js_cancel_update_order_btn")){
        const formParentEl = targetElTriggered.parentElement.parentElement.parentElement;
        if(formParentEl.classList.contains("edit-pop-up-container")){
            formParentEl.remove();
        } 
    }
}

//Try Again - Handle both subtraction and addition scenarios 
function updateOrderQty(order_id_value){
     const updatedOrderQuantity = parseInt(document.querySelector(".js_order_quantity_info").value,10);
    //  console.log(updatedOrderQuantity);
    let newOrderItem;
    getShoppingCartDetails().forEach(function(order_item_info){
        // let orderCartQty = order_item_info.quantity;
        if(order_id_value === order_item_info.id){
            newOrderItem = order_item_info;
            // orderCartQty += updatedOrderQuantity;
            // console.log(order_item_info.quantity);
        }
    });

    //Add if condition to handle addition and subtraction
    newOrderItem.quantity += updatedOrderQuantity;

    //Bad Code logic
    let newCartArray = getShoppingCartDetails().filter(function(testOrder){
        if(order_id_value !== testOrder.id){
            return testOrder;
        }
    });
    
    newCartArray.push(newOrderItem);
    // console.log(newCartArray);
    localStorage.setItem("cart",JSON.stringify(newCartArray));
    window.location.reload();
    // console.log(newOrderItem);
}


function clearShoppingCartDetails(){
   localStorage.removeItem("cart");
   window.location.reload();
}

function checkShoppingCartNotEmpty(){
    return (Array.isArray(getShoppingCartDetails()));
}

//Try Again
function updateShoppingCartLocalStorage(orderId){
    const getCart = getShoppingCartDetails();
    // console.log(getCart);
    let newCart = getCart.filter(function(crt){
        if(crt.id !== orderId){
            return crt;
        }
    });

    localStorage.setItem("cart",JSON.stringify(newCart));
    window.location.reload();    
}

function updateCartPageDetails(){
    const emptyCartH2El = document.createElement("h2");
    emptyCartH2El.innerText = "The Cart is empty,Please go ahead and shop.";
    ordersFeaturesContainer.append(emptyCartH2El);   
}
