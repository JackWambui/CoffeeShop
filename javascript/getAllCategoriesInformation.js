async function getAllCategoriesInformation(){
    // const catURLink = "../javascript/category-information.json";
    const catURLink = "../php/categoryDetails.php";
    const response = await fetch(catURLink);
    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
    // console.log(responseData);
}

