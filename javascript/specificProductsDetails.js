//Handle this code
const queryString = window.location.search;
const paramSearch = new URLSearchParams(queryString);
const queryId = parseInt(paramSearch.get("id"),10); 

// console.log(queryId);

const productNameHeading = document.querySelector(".js-product-name");
const productSpecifics = document.querySelector(".productFeatures1");

async function displaySpecificProductInformation(){
    const specificProductDetails = await getAllProductsInformation();
    // console.log(specificProductDetails);
    specificProductDetails.forEach(function(prod){
        let productId = prod.id;
        // let productId = parseInt(prod.id);
        let productName = prod.name;
        let productImage = prod.image;
        let productPrice = (prod.price).toFixed(2);
        // let productPrice = parseFloat(prod.price);
        //Try Again!!
        // let productRating = prod.ratings.stars;
        let productRating = 4;

        if(productId === queryId){
        //productNameHeading.innerText = paramSearch.get("product-name");
        const productDivElem = document.createElement("div");
        productDivElem.classList.add("product-infos","flex-container");
        productDivElem.setAttribute("data-id",prod.id);
        productSpecifics.append(productDivElem);
        let imagePathCheck = productImage.includes("https");
        productDivElem.innerHTML = `
            <div class="card-section-1 flex-container">
                <div class=card-image-holder>
                    <img src="${imagePathCheck ? productImage : '../images/'+productImage}" alt="${productName}" class="js-product-image">
                </div>
                <div class=card-info-holder>
                    <h1 class=js-product-title>
                        ${productName}
                    </h1>
                    <div class="js-price-star-container">
                        <p class="price">
                            $<span class="js-product-price">
                                ${productPrice}
                            </span>
                        </p>
                        <p class="rating js-product-rating">
                            Ratings ${productRating} / 5
                        </p>
                    </div>
                    <div class="quantity-holder">
                        <button class=js-reduce-qty>
                            -
                        </button>
                        <form class=js-qty-form>
                            <input type=text id=qty-value name=guantity-value class=js-quantity_input value="1" disabled>
                        </form>
                        <button class=js-increase-qty>
                            +
                        </button>
                    </div>
                    <div class=submit-btn>
                        <button type=submit id=submitBtn class="btn-primary js-submit-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div class=card-body-1>
                <h2>
                    Description
                </h2>
                <p>
                    Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.
                </p>
            </div>
        `;
        }
    });

    const quantityContainer = document.querySelector(".quantity-holder");
    let quantityInput = document.querySelector(".js-quantity_input");
    let quantityValue = parseInt(document.querySelector(".js-quantity_input").value,10);

    function calculateQuantity(event){
        event.preventDefault();
        let target = event.target;
        // console.log(target);
        // let quantityValue = parseInt(document.querySelector(".js-quantity_input").value,10);
        
        if(quantityValue >= 0){
            if(target.classList.contains("js-reduce-qty")){
                if(quantityValue > 0){
                    quantityValue = quantityValue - 1;
                }
            }else if(target.classList.contains("js-increase-qty")){
                quantityValue = quantityValue + 1;
            }

            if(quantityValue !== 0){
                quantityInput.value = quantityValue;
            }
        }   
    }

    const orderSubmitBtn = document.querySelector(".js-submit-btn");
    const productNameTitle = document.querySelector(".js-product-title").innerText;
    const productDetailContainer = document.querySelector(".product-infos");
    const productIds = parseInt(productDetailContainer.getAttribute("data-id"),10);
    const productPricing = parseFloat(document.querySelector(".js-product-price").innerText);
    const productImg = document.querySelector(".js-product-image").getAttribute("src");

    // console.log(productImg);

    // console.log(productNameTitle);
    // console.log(productPricing);

    function handleOrderForm(event){
        event.preventDefault();
        const orderDetails = {
            id:productIds,
            image:productImg,
            name:productNameTitle,
            price:productPricing,
            quantity:quantityValue
        }

        let shoppingCart = getShoppingCartDetails() || [];
        shoppingCart.push(orderDetails);

        setShoppingCartDetails(shoppingCart)

        // console.log(shoppingCart);
        // setShoppingCartDetails(orderDetails);
        quantityInput.value = 1;
        updateCartNumber();
    }

    // totalOrderNumber.innerText = getShoppingCartDetails().length;

    // function getShoppingCartDetails(){
    //     const shoppingBasket = JSON.parse(localStorage.getItem("cart"));
    //     return shoppingBasket;
    // }

    function setShoppingCartDetails(order){
    localStorage.setItem("cart",JSON.stringify(order));
    }

    quantityContainer.addEventListener("click",calculateQuantity);
    orderSubmitBtn.addEventListener("click",handleOrderForm);
}

displaySpecificProductInformation();


