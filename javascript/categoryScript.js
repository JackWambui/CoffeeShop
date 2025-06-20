const categories = [
{
    id:1,
    name:"Coffee",
    image:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
},
{
    id:2,
    name:"Cakes",
    image:"https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXN8ZW58MHx8MHx8fDA%3D"
},
{
    id:3,
    name:"Tea",
    image:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D"
},
{
    id:4,
    name:"Refreshers",
    image:"https://plus.unsplash.com/premium_photo-1664392073748-35c3a1c3c385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmcmVzaGVyc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
    id:5,
    name:"Ice Cream",
    image:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGljZWNyZWFtfGVufDB8fDB8fHww"
},
{
    id:6,
    name:"Food",
    image:"https://images.unsplash.com/photo-1583019107470-5bf8e4a96314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZvb2QlMjBpbiUyMGElMjBib3dsfGVufDB8fDB8fHww"
}
];

const categoriesFet = document.querySelector(".categoriesFeatures");
const ulElement = document.querySelector(".secondary-items");
const headerElement = document.querySelector(".js-main-header");


// navElement.append(ulElement);
if(ulElement){
    categories.forEach(function(cat){
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

if(categoriesFet){
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
    handleProductsInformation(products);
}


function handleProductsInformation(products){
    products.forEach(function(product){
        let productId = product.id;
        let productName = product.name;
        let productImage = product.image;
        let productPrice = product.price;
        let productRating = product.ratings.stars;

        const productDivElement = document.createElement("div");
        productDivElement.setAttribute("data-id",productId);
        productDivElement.classList.add("card","js-card-test");
        categoriesFet.append(productDivElement);
        productDivElement.innerHTML = `
        <div class=card-header>
            <a href="">
                <img src="${productImage}" alt="${productName}">
            </a>
        </div>
        <div class=card-body>
            <h2>
                ${productName}
            </h2>
            <div class="js-price-star-container">
                <p class=price>
                    $${productPrice}
                </p>
                <p class=rating>
                    Ratings ${productRating} / 5
                </p>
            </div>
            <a href="specificProductsDetails.html?id=${productId}&product-name=${productName}" class="btn btn-primary view-more-btn">
                View More
            </a>
        </div>
        `;
    });
}
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
             removeAlertMessage();
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