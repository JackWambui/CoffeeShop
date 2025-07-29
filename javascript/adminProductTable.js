// Add a new employee
// function addEmployee() {
//     const form = document.querySelector("#employeeModal");
//     const categoryName = document.querySelector(".");
//     const categoryImage = document.querySelector(".");
   

//     if (!categoryName || !categoryImage) {
//     alert("Please fill in all required fields");
//     return;
//     }
    
//     // Reset form
//     form.reset();   
//     // Show success message
//     alert("Employee added successfully!");
// }
                
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

const categoryImage = document.querySelector(".js_image");

// let imagePathURL;
let js_imageFile;


function getImagePath(event){
    const file = event.target.files[0];
    const previewContainer = document.querySelector("#js_preview_container");
    previewContainer.style.display = "block";
    previewContainer.style.width = "220px";
    const previewImage = document.querySelector(".js_preview_image");
    previewImage.style.width = "100%";
    previewImage.style.height = "auto";

    // console.log(file);
    // let imagePathURL;
    if(file){
        // const newImagePath = URL.createObjectURL(file);
        // imagePathURL = newImagePath;
        js_imageFile = file.name;
        previewImage.src = `../images/${js_imageFile}`;
    }
    // console.log(imagePathURL);
    // finalImagePath =  imagePathURL;
}

// console.log(imagePathURL);

categoryImage.addEventListener("change",getImagePath);

const categoryName = document.querySelector(".js_category_name");


//Helper Function - DRY(Don't Repeat Yourself)
function getCategoryValue(){
    return ((categoryName.value).trim()).toLowerCase();
}

function submitModalEmployee() {
    const categoryForm = document.querySelector("#employeeModal");
    let categoryNameValue = getCategoryValue();

    // //Image add test
    // const jsTestImage = document.querySelector(".testImage");
    // jsTestImage.src = imagePathURL;
    // console.log(jsTestImage);
    // categoryForm.append(jsTestImage);
    // console.log(categoryName);

    if (categoryNameValue === "") {
        alert("Please fill in the Category Name Field");
        return false;
    }
    else if(js_imageFile === "" || js_imageFile === undefined){
        alert("Please Upload Category Image");
        return false;
    }

    postCategoryInformationtoDB();

    // const categoryDetailsObj = {
    //     categoryNamePHP:categoryNameValue,
    //     categoryImagePHP:js_imageFile
    // }

    // console.log(categoryDetailsObj);
    // console.log(imagePathURL);
    // console.log(js_imageFile);


      
  closeEmployeeModal();
//   alert("Category added successfully!");
}


async function postCategoryInformationtoDB(){
    try{
        let categoryNameValue = getCategoryValue();
        const categoryDetailsObj = {
            categoryNamePHP:categoryNameValue,
            categoryImagePHP:js_imageFile
        }
        //Refactor Code - Remember
        const categoryDetailsURLLink = "../php/adminPostProductDetails.php";
        const response = await fetch(categoryDetailsURLLink,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(categoryDetailsObj)
        });

        if(!response.ok){
            throw new Error(`The error status is ${response.status} and message is ${response.statusText}`);
        }

        const responseInformation = await response.json();
        // console.log(responseInformation);
        let result;
        for(let responseData in responseInformation){
            result = responseInformation[responseData];
        }

        alert(`${result}`);
        window.location.reload();
    }catch(error){
        console.log(error.message);
    }
    
    // console.log(categoryDetailsObj);
}

async function getProductInformation(){
    const categoryInfo = await getAllProductsInformation();
    console.log(categoryInfo);
    const tbodyElement = document.querySelector("#employeeTableBody");
    
    categoryInfo.forEach(function(categ){
        let id = categ.id;
        let name = categ.name;
        let image = categ.image;
        let price = categ.price;
        let description = categ.description;
        let createdAt = categ.createdAt;
        let imagePathCheck = image.includes("http");
        // console.log(newImageCheck);
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${id}</td>        
            <td>${name}</td>
            <td>                
                <img src="${imagePathCheck ? image : '../images/'+image}" alt="${name}">
            </td>
            <td>${price.toFixed(2)}</td>
            <td>${description}</td>
            <td>${createdAt}</td>
            <td>
                <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;
        tbodyElement.append(trElement);
    });
}

/*<img src="${newImageCheck ? image : "false"}" alt="${name}">*/
// getCategoryInformation();
window.addEventListener("load",getProductInformation);