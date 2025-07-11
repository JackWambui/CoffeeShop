const ulElement = document.querySelector(".secondary-items");
const headerElement = document.querySelector(".js-main-header");

async function getAllCategoriesInformation(){
    // const catURLink = "../javascript/category-information.json";
    const catURLink = "../php/categoryDetails.php";
    const response = await fetch(catURLink);
    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
    // console.log(responseData);
}

async function displayAllCategories(){
    const categoriesInformation = await getAllCategoriesInformation();
    // console.log(categoriesInformation);
    if(ulElement){
        categoriesInformation.forEach(function(cat){
            let categoryId = cat.id;
            let categoryImage = cat.image;
            let categoryName = cat.name;
            //testUpdate
            const liElement = document.createElement("li");
            liElement.classList.add("secondary-item");
            ulElement.append(liElement);
            // console.log(liElement);
            liElement.innerHTML = `
                <a href="products.html?cat-id=${categoryId}&cat-name=${categoryName}">
                    ${categoryName}
                </a>
            `;
        });
    }
}

document.addEventListener("DOMContentLoaded",displayAllCategories());

//The code below handles Product Searching
const searchInputContainer = document.querySelector(".test-container");

if(searchInputContainer){
    const searchInput = document.querySelector(".js-search-input");
    
    function handleProductSearch(event){
        event.preventDefault();
        let searchInputValue = ((searchInput.value).toLowerCase()).trim();
        let searchInputLength = searchInputValue.length;
        const categoriesContainer = document.querySelector("#js-categoriesFeatures");
        let categoriesItems = categoriesContainer.querySelectorAll(".card");
        let categoryItemsArray = Array.from(categoriesItems);
        // console.log(categoryItemsArray);

        if(searchInputLength >= 3){
            // console.log(searchInputValue);
            let alertMessage = "";
            categoryItemsArray.forEach(function(productItem){
                let productNameDb = ((productItem.lastElementChild.firstElementChild.innerText).toLowerCase()).trim(); 
                if(productNameDb.includes(searchInputValue)){
                    productItem.style.display = "block";
                }else{
                    productItem.style.display = "none";
                    alertMessage = "Sorry the product is not available.";
                    // alertMessages("error","Sorry the product is not available.");
                    // removeAlertMessage();
                }   
            });
           
            setTimeout(function(){
                alertMessages("error",alertMessage);
            },500);

            // setTimeout(function(){
            //     alertMessages("error",alertMessage);
            // },500);

            // setTimeout(function(){
            //     const alertMessageDom = document.querySelector(".alert-messages");
            //     alertMessageDom.remove();
            // },3500);
            
            //Look into this code
            removeAlertMessage();

        }else if(searchInputLength === 0){
            //event.key === "Backspace" || - try again!
            // console.log('backspace is clicked');
            categoryItemsArray.forEach(function(itemProduct){
                if(itemProduct.style.display === "none"){
                    itemProduct.style.display = "block";
                }
            });
            // removeAlertMessage();
        }
    }
    // searchInput.addEventListener("keyup",handleProductSearch);
    searchInput.addEventListener("input",handleProductSearch);
}


function alertMessages(alertClass,message){
    const alertMessageEl = document.createElement("div");
    alertMessageEl.className = "alert-messages";
    alertMessageEl.classList.add(alertClass);
    let alertMessageText = document.createTextNode(message);
    alertMessageEl.append(alertMessageText);
    searchInputContainer.append(alertMessageEl);
    return alertMessageEl;
}

function removeAlertMessage(){
    setTimeout(function(){
            const alertMessageDom = document.querySelector(".alert-messages");
            alertMessageDom.remove();
    },1000);
}


// const categoriesFet = document.querySelector(".categoriesFeatures");

//Remember to delete this.

// getAllCategoriesInformation();
// navElement.append(ulElement);

// console.log(`<li><a>${cat.name}</a></li>`);

// const categoriesFeature = document.createElement("div");
// categoriesFeature.className = "card";
// categoriesFet.append(categoriesFeature);
// categoriesFeature.innerHTML = `
//     <div class=card-header>
//         <a href="products.html?cat-id=${categoryId}&cat-name=${categoryName}">
//             <img src="${categoryImage}" alt=${categoryName}>
//         </a>
//     </div>
//     <div class=card-body>
//         <h2>
//             ${categoryName}
//         </h2>
//     </div>
// `;

// console.log(products);

// });

// console.log(products.length);

// if(categoriesFet){
    //Refactor this code
    // products.forEach(function(product){
    //     let productId = product.id;
    //     let productName = product.name;
    //     let productImage = product.image;
    //     let productPrice = product.price;
    //     let productRating = product.ratings.stars;

    //     const productDivElement = document.createElement("div");
    //     productDivElement.setAttribute("data-id",productId);
    //     productDivElement.classList.add("card","js-card-test");
    //     categoriesFet.append(productDivElement);
    //     productDivElement.innerHTML = `
    //     <div class=card-header>
    //         <a href="">
    //             <img src="${productImage}" alt="${productName}">
    //         </a>
    //     </div>
    //     <div class=card-body>
    //         <h2>
    //             ${productName}
    //         </h2>
    //         <div class="js-price-star-container">
    //             <p class=price>
    //                 $${productPrice}
    //             </p>
    //             <p class=rating>
    //                 Ratings ${productRating} / 5
    //             </p>
    //         </div>
    //         <a href="specificProductsDetails.html?id=${productId}&product-name=${productName}" class="btn btn-primary view-more-btn">
    //             View More
    //         </a>
    //     </div>
    //     `;
    // });
    // handleProductsInformation(products);
// }


// function handleProductsInformation(products){
//     products.forEach(function(product){
//         let productId = product.id;
//         let productName = product.name;
//         let productImage = product.image;
//         let productPrice = product.price;
//         let productRating = product.ratings.stars;

//         const productDivElement = document.createElement("div");
//         productDivElement.setAttribute("data-id",productId);
//         productDivElement.classList.add("card","js-card-test");
//         categoriesFet.append(productDivElement);
//         productDivElement.innerHTML = `
//         <div class=card-header>
//             <a href="">
//                 <img src="${productImage}" alt="${productName}">
//             </a>
//         </div>
//         <div class=card-body>
//             <h2>
//                 ${productName}
//             </h2>
//             <div class="js-price-star-container">
//                 <p class=price>
//                     $${productPrice}
//                 </p>
//                 <p class=rating>
//                     Ratings ${productRating} / 5
//                 </p>
//             </div>
//             <a href="specificProductsDetails.html?id=${productId}&product-name=${productName}" class="btn btn-primary view-more-btn">
//                 View More
//             </a>
//         </div>
//         `;
//     });
// }

// const searchInputContainer = document.querySelector(".test-container");

// if(searchInputContainer){
// // console.log("searching...");
// const searchBtn1 = document.querySelector(".searchTestingBtn");

// function handleProductSearch(event){
//     event.preventDefault();

//     // let searchInputLength = searchInputValue.length;
//     const categoriesContainer = document.querySelector("#js-categoriesFeatures");
//     let categoriesItems = categoriesContainer.querySelectorAll(".card");
//     let searchInput = document.querySelector(".js-search-input");
//     let searchInputValue = ((searchInput.value).toLowerCase()).trim();
    
//     categoriesItems.forEach(function(productItem){
//         let productNameDb = ((productItem.lastElementChild.firstElementChild.innerText).toLowerCase()).trim(); 
//         if(productNameDb.includes(searchInputValue)){
//             // console.log(`<div>${productNameDb}</div>`); 
//             productItem.style.display = "block";
//         }else{
//             productItem.style.display = "none";
//         }
        
        
//     });
// }
// searchBtn1.addEventListener("click",handleProductSearch);
// }

