<?php
// Connecting  to database - remember to use include
    require("../php/database_connection.php");
    header("Content-Type:application/json");

    //Gets the type of method being sent in the api
    $requestType = $_SERVER["REQUEST_METHOD"];
    
    $message;
    if($requestType === "POST"){
        // $message = "Hello there";
        $json = file_get_contents("php://input");
        $jsonData = json_decode($json,true);

        // $message = $jsonData;

        $customerFirstNameDB = $jsonData["firstNamePHP"];
        $message = $customerFirstNameDB;
        // $sql = "INSERT INTO customers (customer_fname, customer_lname)
        // VALUES ('John', 'Doe', 'john@example.com')";

        // //Dont use conn instead use connection
        // if ($connection->query($sql) === TRUE) {
        // echo "New record created successfully";
        // } else {
        // echo "Error: " . $sql . "<br>" . $conn->error;
        // }
    }
    
    $array = array(
        "message"=>$message
    );
    echo json_encode($array);
?>