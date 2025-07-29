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
        $customerFirstNameDB = $jsonData["firstNamePHP"];
        $customerLastNameDB = $jsonData["lastNamePHP"];
        $customerEmailDB = $jsonData["emailPHP"];
        $sql = "INSERT INTO customers (Customer_Username, Customer_FName, Customer_LName, Customer_EmailAddress)
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("sssss", $customerUserNameDB, $customerFirstNameDB, $customerLastNameDB, $customerEmailDB);
        $stmt->execute();



        // $customerUserNameDB = $jsonData["usernamePHP"];
        // // $message = $customerLastNameDB;
        // $sql = "INSERT INTO customers (Customer_Username, Customer_FName, Customer_LName, Customer_EmailAddress, Customer_PhoneNumber)
        // VALUES ('$Customer_Username', '$Customer_FName', '$Customer_LName', '$Customer_EmailAddress', '$Customer_PhoneNumber')";

        // $customerFirstNameDB = $jsonData["firstNamePHP"];
        // // $message = $customerFirstNameDB;
        // $sql = "INSERT INTO customers (first_name)
        // VALUES ('$customerFirstNameDB')";

        // $customerLastNameDB = $jsonData["lastNamePHP"];
        // // $message = $customerLastNameDB;
        // $sql = "INSERT INTO customers (last_name)
        // VALUES ('$customerLastNameDB')";

        // $customerEmailDB = $jsonData["emailPHP"];
        // // $message = $customerLastNameDB;
        // $sql = "INSERT INTO customers (email)
        // VALUES ('$customerEmailDB')";

        // $customerPasswordDB = $jsonData["passwordPHP"];
        // // $message = $customerLastNameDB;
        // $sql = "INSERT INTO customers (password)
        // VALUES ('$customerpasswordDB')";

        // $customerConfirmPasswordDB = $jsonData["confirmPasswordPHP"];
        // // $message = $customerLastNameDB;
        // $sql = "INSERT INTO customers (confirmpassword)
        // VALUES ('$customerConfirmPasswordDB')";
        

        //Dont use conn instead use connection
        if ($connection->query($sql) === TRUE) {
            $message = "New record created successfully";
        } else {
            $message = "Error";
        }
    }
    
    $array = array(
        "message"=>$message
    );
    echo json_encode($array);
?>