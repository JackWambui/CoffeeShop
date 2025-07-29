<?php
    require("../php/database_connection.php");
    header("Content-Type:application/json");
    $requestType = $_SERVER["REQUEST_METHOD"];
    if($requestType === "POST"){
        // $message = "hello";
        $json = file_get_contents("php://input");
        $jsonData = json_decode($json,true);

        $FirstNameDB     = htmlspecialchars($jsonData["employeeFirstNamePHP"]);
        $LastNameDB      = htmlspecialchars($jsonData["employeeLastNamePHP"]);
        $EmailDB         = htmlspecialchars($jsonData["employeeEmailPHP"]);
        $PositionDB      = htmlspecialchars($jsonData["employeePositionPHP"]);
        $StartDateDB     = htmlspecialchars($jsonData["employeeStartDatePHP"]);
        $message = $StartDateDB;


         $preparedQueryStmt2 = $connection->prepare("INSERT INTO employees(firstname,lastname,email,position,Start_date) VALUE (?,?,?,?,?)");
         $preparedQueryStmt2->bind_param("sssss", $FirstNameDB,$LastNameDB,$EmailDB,$PositionDB,$StartDateDB);
         $preparedQueryStmt2->execute();
         $message = "Employee details added successfully.";

        // $message = "Employee Details Added successfully";

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