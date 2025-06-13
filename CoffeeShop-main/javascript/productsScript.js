/*const products = [
    {
        id:1,
        name:"Americano",
        image:"https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW5vfGVufDB8fDB8fHww",
        category:1
    },
    {
        id:2,
        name:"Brewed Coffee",
        image:"https://images.unsplash.com/photo-1638202525812-53881ca0f4b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGJyZXdlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        category:1
    },
    {
        id:3,
        name:"Caffe Latte",
        image:"https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZmUlMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
        category:1
    },
    {
        id:4,
        name:"Caffe Mocha",
        image:"https://images.unsplash.com/photo-1650486280607-93d026bd5213?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNhZmZlJTIwbW9jaGF8ZW58MHx8MHx8fDA%3D",
        category:1
    },
    {
        id:5,
        name:"Cappuccino",
        image:"https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
        category:1
    },
    {
        id:6,
        name:"Expresso",
        image:"https://images.unsplash.com/photo-1596952954288-16862d37405b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwcmVzc298ZW58MHx8MHx8fDA%3D",
        category:1
    },
];*/

const productsHeading = document.querySelector(".heading1");
const productFet = document.querySelector(".productsFeatures");
productFet.classList.add("categoriesFeatures");

const searchQuery = window.location.search;
const queryParam = new URLSearchParams(searchQuery);
const queryId = parseInt(queryParam.get("cat-id"),10);
const queryName = queryParam.get("cat-name");
console.log(queryId);

productsHeading.innerText = queryName;

products.forEach(function(product){
    let productId = product.id;
    let productImage = product.image;
    let productName = product.name;
    let categoryId = product.category;
 

    if(categoryId === queryId){
        const productFeature = document.createElement("div");
        productFeature.className = "card";
        productFet.append(productFeature);
        productFeature.innerHTML = `
            <div class=card-header>
                <a href="specificProducts.html?id=${productId}">
                    <img src="${productImage}" alt=${productName}>
                </a>
            </div>
            <div class=card-body>
                <h2>
                    ${productName}
                </h2>
            </div>
        `;
    }    
});