const categoriesFet = document.querySelector(".categoriesFeatures");
const productsFet = document.querySelector(".productsFeatures");

async function getAllProductsInformation(){
    // const urlLink = "../javascript/products-information.json";
    const urlLink = "../php/productsDetails.php";
    const response = await fetch(urlLink);
    const responseData = await response.json();
    //Try Again - error json object
    // console.log(typeof responseData);
    // console.log(JSON.parse(responseData));
    // console.log(responseData);
    return responseData;
}
// getAllProductsInformation();

async function displayAllProductsInformation(){
    const productsInformation = await getAllProductsInformation();
    // productsInformation.forEach(function(productItem){
    //     // console.log(productItem);
    //     displayProductDetailsinDOM(productItem);
    // });
    loopThruProductInformation(productsInformation);
}

if(categoriesFet){
    displayAllProductsInformation();
}

async function displaySpecificProductsInformation(){    
    const specificProductInformation = await getAllProductsInformation();
    let searchQueryString = window.location.search;
    let searchQueryParams = new URLSearchParams(searchQueryString);
    let categoryId = parseInt(searchQueryParams.get("cat-id"),10);
    let categoryName = searchQueryParams.get("cat-name");
    const productsCategoryName = document.querySelector(".js-products-section .heading1");
    productsCategoryName.innerText = categoryName;
    
    // console.log(specificProductInformation);
    const productFilteredInformation = specificProductInformation.filter(function(specificProduct){
        let categoryIDNum = specificProduct.category;
        // let categoryIDNum = parseInt(specificProduct.category);
        if(categoryIDNum === categoryId){
            return specificProduct;
        }
    });
    // console.log(productFilteredInformation);
    loopThruProductInformation(productFilteredInformation);
}

if(productsFet){
    displaySpecificProductsInformation();
}

function loopThruProductInformation(productItemss){
    productItemss.forEach(function(itemProduc){
        displayProductDetailsinDOM(itemProduc);
    });
}

function displayProductDetailsinDOM(product){
    const productsContainer = document.querySelector(".js-products-details");
    // console.log(product.name);

    let productImage = product.image;
    let productId = product.id;
    let productName = product.name;
    let productPrice = (product.price).toFixed(2);
    // let productPrice = parseInt((product.price)).toFixed(2);
    //Try Again
    // let productRating = product.ratings.stars;
    let productRating = 4;

    const productDivElement = document.createElement("div");
    productDivElement.setAttribute("data-id",productId);
    productDivElement.classList.add("card","js-card-test");
    productsContainer.append(productDivElement);
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
}

