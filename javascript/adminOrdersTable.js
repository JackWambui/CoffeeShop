// Save edited employee
function saveEmployee(button) {
    
}
        
// Cancel edit
function cancelEdit(button) {
    
}
        
// Delete an employee
function deleteEmployee(button) {
    if (confirm("Are you sure you want to delete this employee?")) {
        // Remove from table
        row.parentNode.removeChild(row);
        alert("Employee deleted successfully!");
    }
}

// Initialize the table when page loads
// window.onload = initializeTable;
        
// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

function openEmployeeModal() {
  document.getElementById("employeeModal").style.display = "block";
}

function closeEmployeeModal() {
  document.getElementById("employeeModal").style.display = "none";
}

// const productImage = document.querySelector(".js_image");
// const positioninput = document.querySelector(".js_Position");

// // let imagePathURL;
// let js_imageFile;


// function getImagePath(event){
//     const file = event.target.files[0];
//     const previewContainer = document.querySelector("#js_preview_container");
//     previewContainer.style.display = "block";
//     previewContainer.style.width = "220px";
//     const previewImage = document.querySelector(".js_preview_image");
//     previewImage.style.width = "100%";
//     previewImage.style.height = "auto";
//     if(file){
//         js_imageFile = file.name;
//         previewImage.src = `../images/${js_imageFile}`;
//     }
// }

// // console.log(imagePathURL);

// productImage.addEventListener("change",getImagePath);

// const employeeFirstName = document.querySelector(".js_FirstName").value;
// const employeeLastName = document.querySelector(".js_LastName").value;
// const employeeEmail = document.querySelector(".js_Email").value;
// const employeePosition = document.querySelector(".js_Position").value;
// const employeeStartDate = document.querySelector(".js_StartDate").value;



// //Helper Function - DRY(Don't Repeat Yourself)
// function getProductNameValue(){
//     return ((productName.value).trim()).toLowerCase();
// }

// function getProductPriceValue(){
//     return ((productPrice.value).trim()).toLowerCase();
// }

// function getProductDescriptionValue(){
//     return ((productDescription.value).trim()).toLowerCase();
// }
// const positioninput = document.querySelector(".js_Position");
// let selectedPosition;
// function getSelectedCategory(event){
//     let target = event.target.value;
//     selectedPosition = target;
//     // console.log(selectedCategory);
// }
// // console.log(selectedPosition);

// positioninput.addEventListener("change",getSelectedCategory);

// function submitModalEmployee() {
//     const productForm = document.querySelector("#employeeModal");
//    const employeeFirstName = document.querySelector(".js_FirstName").value;
//    const employeeLastName = document.querySelector(".js_LastName").value;
//    const employeeEmail = document.querySelector(".js_Email").value;
//    const employeePosition = document.querySelector(".js_Position").value;
//    const employeeStartDate = document.querySelector(".js_StartDate").value;

//    console.log(selectedPosition);

//     if (employeeFirstName  === "") {
//         alert("Please fill in the First Name.");
//         return false;
//     }
//     else if(employeeLastName  === ""){
//         alert("Please fill in the Last Name.");
//         return;
//     }
//     else if(employeeEmail === ""){
//         alert("Please fill in the Email.");
//         return;
//     }
//     else if(selectedPosition=== "" || selectedPosition=== undefined || selectedPosition=== NaN){
//         alert("Please select a Position.");
//         return;
//     }
//     else if(employeeStartDate  === "" || employeeStartDate  === undefined){
//         alert("Please select Start date.");
//         return false;
//     }

//     postProductInformationtoDB();
//     closeEmployeeModal();
// }


// async function postProductInformationtoDB(){
//     try{
//          const employeeFirstName = document.querySelector(".js_FirstName").value;
//         const employeeLastName = document.querySelector(".js_LastName").value;
//         const employeeEmail = document.querySelector(".js_Email").value;
//         const employeePosition = document.querySelector(".js_Position").value;
//         const employeeStartDate = document.querySelector(".js_StartDate").value;

//         const employeeDetailsObj = {
//             employeeFirstNamePHP: employeeFirstName,
//             employeeLastNamePHP:employeeLastName,
//             employeeEmailPHP:employeeEmail,
//             employeePositionPHP:selectedPosition,
//             employeeStartDatePHP:employeeStartDate
//         }

//         console.log(employeeDetailsObj);

//         // console.log(productDetailsObj);

//         //Refactor Code - Remember
//         const productDetailsURLLink = "../php/adminPostEmployeeDetails.php";
//         const response = await fetch(productDetailsURLLink,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(employeeDetailsObj)
//         });

//         if(!response.ok){
//             throw new Error(`The error status is ${response.status} and message is ${response.statusText}`);
//         }

//         const responseInformation = await response.json();
//         // console.log(responseInformation);
//         let result;
//         for(let responseData in responseInformation){
//             result = responseInformation[responseData];
//         }

//         alert(`${result}`);
//         window.location.reload();
//     }catch(error){
//         console.log(error.message);
//     }
    
//     // console.log(categoryDetailsObj);
// }

// postProductInformationtoDB();
let newOrderID;
let currentOrderStatus;
async function getFeedbackDetails(){
    const employeesDetailsURL = "../php/fetchAdminOrders.php";
    const response = await fetch(employeesDetailsURL);
    const responseData = await  response.json();
    const tbodyElement = document.querySelector("#employeeTableBody");
    
    responseData.forEach(function(empl,index){
        let id = parseInt(empl.order_Id,10);
        let orderNo = empl.orderNumber;
        let customerID = empl.customerID;
        let orderStatus = empl.orderStatus;
        let createdAt = empl.createdAt;    
        newOrderID = parseInt(id,10);
        currentOrderStatus = orderStatus;
        // console.log(newImageCheck);
        const trElement = document.createElement("tr");
        trElement.setAttribute("data-id",id);
        trElement.innerHTML = `
            <td>${index+=1}</td>        
            <td>${orderNo}</td>
            <td>${customerID}</td>
            <td>${orderStatus}</td>
            <td>${createdAt}</td>
            <td class="js_order_btn_collection">
                <button class="btn btn-primary editStatus"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;
        tbodyElement.append(trElement);
    });
    // console.log(responseData);
    const orderBtnCollection = document.querySelector(".js_order_btn_collection");
    console.log(orderBtnCollection);
    orderBtnCollection.addEventListener("click",editOrderStatus);
}

getFeedbackDetails();

// const orderBtnCollection = document.querySelector(".js_order_btn_collection");
// console.log(orderBtnCollection);

function editOrderStatus(event){
    // console.log("hello");
    let target = event.target;
    if(target.classList.contains("editStatus")){
        console.log(target.parentElement.parentElement.getAttribute("data-id"));
        // const hiddenFormEl = document.querySelector(".hidden-form");
        // hiddenFormEl.style.display = "block";
        // hiddenFormEl.innerHTML = `
        //     <form>
        //         <h2>Update Order Status</h2>
        //         <div class='form-control'>
        //             <label for='orderId'>Order ID</label>
        //             <input type="text" id="orderId" class="js-orderId" value="${newOrderID}" disabled>
        //         </div>
        //         <div class='form-control'>
        //             <label for='orderId'>Status</label>
        //             <select name="update_order_status>
        //                 <option value="">${currentOrderStatus}</option>
        //                 <option value="Ready for Pickup">Ready for Pickup</option>
        //             </select>
        //         </div>
        //     </form>
        //     `;
    }
    // console.log(target);
}

// orderBtnCollection.addEventListener("click",editOrderStatus);



// async function getProductInformation(){
//     const productInfo = await getAllProductsInformation();
//     // console.log(productInfo);
//     const tbodyElement = document.querySelector("#employeeTableBody");
    
//     productInfo.forEach(function(produ,index){
//         let id = produ.id;
//         let name = produ.name;
//         let image = produ.image;
//         let price = (produ.price).toFixed(2);
//         let description = produ.description;
//         let categoryId = produ.category;
//         let categoryName = produ.category_name;
//         let createdAt = produ.createdAt;
//         let imagePathCheck = image.includes("https");
//         // console.log(newImageCheck);
//         const trElement = document.createElement("tr");
//         trElement.innerHTML = `
//             <td>${index+=1}</td>        
//             <td>${name}</td>
//             <td>                
//                 <img src="${imagePathCheck ? image : '../images/'+image}" alt="${name}">
//             </td>
//             <td>${price}</td>
//             <td>${description}</td>
//             <td>${categoryName}</td>
//             <td>${createdAt}</td>
//             <td>
//                 <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
//                 <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
//             </td>
//         `;
//         tbodyElement.append(trElement);
//     });
// }

// async function getCategoryNameInfo(){
//     const categoryInformation = await getAllCategoriesInformation();
//     // console.log(categoryInformation);
//     const categorySelectEl = document.querySelector(".js_category_info");
//     categoryInformation.forEach(function(catego){
//        const categoryOptionEl = document.createElement("option");
//        categoryOptionEl.setAttribute("value",catego.id);
//        categoryOptionEl.innerText = `${catego.name}`;
//        categorySelectEl.append(categoryOptionEl);
//     });
//     // console.log(categorySelectEl);
// }

// getCategoryNameInfo();

// // getProductInformation();
// window.addEventListener("load",getProductInformation);


