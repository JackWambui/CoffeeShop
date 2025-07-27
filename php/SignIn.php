<?php
// Connecting  to database - remember to use include
    require("../php/database_connection.php");
    header("Content-Type:application/json");

    //Gets the type of method being sent in the api
    $requestType = $_SERVER["REQUEST_METHOD"];
    // $requestType = "POST";
    
    $message;
    if($requestType === "POST"){
        // $message = "Hello there";
        $json = file_get_contents("php://input");
        $jsonData = json_decode($json,true);

        // $message = $jsonData;

        $customerUserNameDB = $jsonData["usernamePHP"];
        // $message = $customerFirstNameDB;
        $sql = "INSERT INTO customers (username)
        VALUES ('$customerUserNameDB')";

         $customerEmailDB = $jsonData["emailPHP"];
        // $message = $customerFirstNameDB;
        $sql = "INSERT INTO customers (email)
        VALUES ('$customerEmailDB')";

         $customerPasswordDB = $jsonData["passwordPHP"];
        // $message = $customerFirstNameDB;
        $sql = "INSERT INTO customers (password)
        VALUES ('$customerPasswordDB')";
    }
?>