async function getOrdersDetails(){

    try{
        const ordersURLLink = "../php/fetchOrdersDetails.php";
        let customerID = 1;
        // const urlSearchParam = new URLSearchParams(customerID);
        // console.log(`${ordersURLLink}?customerID=${customerID}`);
        const response = await fetch(`${ordersURLLink}?customerID=${customerID}`,{
            method:"GET"
            }
        );
        if(!response.ok){
            throw new Error(`Error status ${response.status} and message ${response.statusText}`);
        }
        const responseData = await response.json();
        // console.log(responseData);
        // return responseData;
        let ordersResponseInformation;
        for(let ords in responseData){
            ordersResponseInformation = responseData[ords];
        }
        // console.log(ordersResponseInformation);
        return ordersResponseInformation;
    }catch(error){
        console.log(error.message);
    }
    
    // console.log("hello there");
}

async function displayOrdersDetails(){
    const orders = await getOrdersDetails();
    // console.log(Array.isArray(orders));
    // console.log(orders);

    const ordersInformation = document.querySelector(".js-orders-details");
    const tableElement = document.createElement("table");
    tableElement.classList.add("js-orders-details-table");
    ordersInformation.append(tableElement);
    tableElement.innerHTML = `
        <thead class="orders_table_heading">
            <tr>
                <th>
                    Order ID
                </th>
                <th>
                    Order No
                </th>
                <th>
                    Status
                </th>
                <th>
                    Date
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>`;
    const ordertableBody = document.createElement("tbody");
    ordertableBody.classList.add("js_orders_table_body");
    tableElement.append(ordertableBody);

    orders.forEach(function(order){
       let jsOrderID        = order.orderID;
       let jsOrderNumber    = order.orderNumber;
       let jsOrderStatus    = order.orderStatus;
       let jsOrderCreatedAt = order.createdAt;
       const orderTableRow  = document.createElement("tr");
       orderTableRow.setAttribute("order_id",jsOrderID);
       orderTableRow.innerHTML = `
            <td>
                ${jsOrderID}
            </td>
            <td>
                ${jsOrderNumber}
            </td>
            <td>
                ${jsOrderStatus}
            </td>
            <td>
                ${jsOrderCreatedAt}
            </td>
            <td>
                <a href="../html/specificOrderDetails.html?order_id=${jsOrderID}&order_number=${jsOrderNumber}" class="js-btn-primary">
                    View More
                </a>
            </td>
       `;
       //console.log(orderTableRow);
       ordertableBody.append(orderTableRow);
    });
}
//Try Again - Remember
// if()
displayOrdersDetails();
