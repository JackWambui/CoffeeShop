<?php
// Connecting  to database - remember to use include
    require("../php/database_connection.php");
    header("Content-Type:application/json");

    //Gets the type of method being sent in the api
    $requestType = $_SERVER["REQUEST_METHOD"];
    // $requestType = "POST";


    if ($requestType === "POST") {
        // Extract form data from POST
        $json = file_get_contents("php://input");
        $jsonData = json_decode($json,true);

        $customerUserNameDB = $jsonData["usernamePHP"];
        $customerEmailDB = $jsonData["emailPHP"];
        $customerPassword = password_hash($jsonData["passwordPHP"], PASSWORD_DEFAULT);

        $message = $customerPassword;

        $preparedStmt1 = $connection->prepare("INSERT INTO customers(Customer_Username,Customer_EmailAddress,Customer_Password) VALUE (?,?,?)");
        }
?>