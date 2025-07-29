<?php
    require("../php/database_connection.php");
    header("Content-Type:application/json");
    $requestType = $_SERVER["REQUEST_METHOD"];
    if($requestType === "POST"){
        // $message = "hello";
        $json = file_get_contents("php://input");
        $jsonData = json_decode($json,true);

        $FirstNameDB        = htmlspecialchars($jsonData["employeeFirstNamePHP"]);
        $message = $jsonData;
        // $productPriceDB       = htmlspecialchars($jsonData["productPricePHP"]);
        // $productDescriptionDB = htmlspecialchars($jsonData["productPriceDescriptionPHP"]);
        // $productCategoryDB    = htmlspecialchars($jsonData["productCategoryPHP"]);
        // $productImageDB       = htmlspecialchars($jsonData["productImagePHP"]);

        // $preparedQueryStmt1 = "SELECT product_name FROM products WHERE product_name = '$productNameDB'";
        // $preparedQueryResult1 = $connection->query($preparedQueryStmt1);

        // if($preparedQueryResult1->num_rows > 0){
        //     $message = "$productNameDB already exist.Please add another product.";
        // }else{
        //     $preparedQueryStmt2 = $connection->prepare("INSERT INTO products(product_name,image,price,description,category_id) VALUE (?,?,?,?,?)");
        //     $preparedQueryStmt2->bind_param("ssdsi",$productNameDB,$productImageDB,$productPriceDB,$productDescriptionDB,$productCategoryDB);
        //     $preparedQueryStmt2->execute();
        //     $message = "$productNameDB added successfully.";
        // }
        
        $resultArray = array(
            "message"=>$message
        );
        echo json_encode($resultArray);
    }
?>