const queryString = window.location.search;
const searchQueryParam = new URLSearchParams(queryString);
let orderID = parseInt(searchQueryParam.get("order_id"),10);
let orderNumber = searchQueryParam.get("order_number");
// console.log(typeof orderID);
// console.log(orderID);

const orderHeadingSpan = document.querySelector(".js_specific_order_number");

orderHeadingSpan.innerText = `${orderNumber}`;

async function getSpecificOrderItems(){
    try{
         let orderIDValue = orderID;
         const orderItemsURLLink = `../php/fetchSpecificOrdersItems.php?order_id=${orderIDValue}`;
        //  console.log(orderItemsURLLink);
         const response = await fetch(orderItemsURLLink,{
            method:"GET"
         });

         const responseData = await response.json();
         
         let orderItemsInformation;

         for(let orderItemInfo in responseData){
            orderItemsInformation = responseData[orderItemInfo];
         }

         return orderItemsInformation;
    }catch(error){
        console.log(error.message);
    }
}

// getSpecificOrderItems();

async function displayOrdersItemsDetails(){
    const orders = await getSpecificOrderItems();
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
                    Item #
                </th>
                <th>
                    Image
                </th>
                <th>
                    Name
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Order Date
                </th>
            </tr>
        </thead>`;
    const ordertableBody = document.createElement("tbody");
    ordertableBody.classList.add("js_orders_table_body");
    tableElement.append(ordertableBody);

    orders.forEach(function(order,index){
       let jsOrderID = order.order_item_id;
       let jsProductImage = order.product_image;
       let jsProductName = order.product_name;
       let jsProductQty = order.order_item_quantity;
       let jsOrderCreatedAt = order.order_created_at;
       const orderTableRow = document.createElement("tr");
       orderTableRow.setAttribute("order_id",jsOrderID);
       orderTableRow.innerHTML = `
            <td>
                ${index += 1}
            </td>
            <td>
                <img src="${jsProductImage}" alt="${jsProductName}">
            </td>
            <td>
                ${jsProductName}
            </td>
            <td>
                ${jsProductQty}
            </td>
            <td>
                ${jsOrderCreatedAt}
            </td>
       `;
       //console.log(orderTableRow);
       ordertableBody.append(orderTableRow);
    });
}
//Try Again - Remember
// if()
displayOrdersItemsDetails();