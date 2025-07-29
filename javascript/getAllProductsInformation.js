async function getAllProductsInformation(){
    // const urlLink = "../javascript/products-information.json";
    const urlLink = "../php/productsDetails1.php";
    const response = await fetch(urlLink);
    const responseData = await response.json();
    return responseData;
}