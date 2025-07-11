const productsHeading = document.querySelector(".heading1");
const productFet = document.querySelector(".productsFeatures");
const uniqueProductsContainer = document.querySelector("#js-unique-products");

// productFet.classList.add("categoriesFeatures");

// const searchQuery = window.location.search;
// const queryParam = new URLSearchParams(searchQuery);
// const queryId = parseInt(queryParam.get("cat-id"),10);
// const queryName = queryParam.get("cat-name");
// console.log(queryId);

// productsHeading.innerText = queryName;



// if(uniqueProductsContainer){
    // const testProduct = products.filter(function(prodItems){
    //     let categoryIdDb = prodItems.category;
    //     if(categoryIdDb === queryId){
    //         return prodItems;
    //     }
    // });
    // //Rethink this duplicate code
    // testProduct.forEach(function(product){
    // let productId = product.id;
    // let productImage = product.image;
    // let productName = product.name;
    // let productPrice = product.price;
    // let productRating = product.ratings.stars;
    // // let categoryId = product.category;
 
    //     const productFeature = document.createElement("div");
    //     productFeature.className = "card";
    //     productFet.append(productFeature);
    //     productFeature.innerHTML = `
    //        <div class=card-header>
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
    // console.log(testProduct);
    // handleProductsInformation(testProduct);
// }



// handleProductsInformation(testProduct);

//Refactor this code
// products.forEach(function(product){
//     let productId = product.id;
//     let productImage = product.image;
//     let productName = product.name;
//     let productPrice = product.price;
//     let productRating = product.ratings.stars;
//     let categoryId = product.category;
 

//     if(categoryId === queryId){

//         // handleProductsInformation(products);
//         // const productFeature = document.createElement("div");
//         // productFeature.className = "card";
//         // productFet.append(productFeature);
//         // productFeature.innerHTML = `
//         //    <div class=card-header>
//         //     <a href="">
//         //         <img src="${productImage}" alt="${productName}">
//         //     </a>
//         // </div>
//         // <div class=card-body>
//         //     <h2>
//         //         ${productName}
//         //     </h2>
//         //     <div class="js-price-star-container">
//         //         <p class=price>
//         //             $${productPrice}
//         //         </p>
//         //         <p class=rating>
//         //             Ratings ${productRating} / 5
//         //         </p>
//         //     </div>
//         //     <a href="specificProductsDetails.html?id=${productId}&product-name=${productName}" class="btn btn-primary view-more-btn">
//         //         View More
//         //     </a>
//         // </div>
//         // `;
//     }    
// });
