<?php
require("../php/database_connection.php");
header("Content-Type: application/json");

$requestType = $_SERVER["REQUEST_METHOD"];
// $response = [];
$message;


if ($requestType === "POST") {
    // Extract form data from POST
    $json = file_get_contents("php://input");
    $jsonData = json_decode($json,true);
    // $customerUserNameDB = $_POST["username"];
    // $customerFirstNameDB = $_POST["First Name"];
    // $customerLastNameDB = $_POST["Last Name"];
    // $customerEmailDB = $_POST["Email"];
    $message = $jsonData;

    $customerUserNameDB = $jsonData["usernamePHP"];
    $customerFirstNameDB = $jsonData["firstNamePHP"];
    $customerLastNameDB = $jsonData["lastNamePHP"];
    $customerEmailDB = $jsonData["emailPHP"];
    $customerPassword = $jsonData["passwordPHP"];

    // // Prepare SQL statement
    // $sql = "INSERT INTO customers (Customer_Username, Customer_FName, Customer_LName, Customer_EmailAddress,Customer_Password)
    //         VALUES (?, ?, ?, ?,?)";
    // $stmt = $connection->prepare($sql);
    // $stmt->bind_param("sssss", $customerUserNameDB, $customerFirstNameDB, $customerLastNameDB, $customerEmailDB,$customerPassword);

    // // Execute and respond
    // if ($stmt->execute()) {
    //     $response["message"] = "Account created successfully!";
    // } else {
    //     http_response_code(500);
    //     $response["message"] = "Error creating account.";
    // }

    // $stmt->close();
    $resultArray = array(
        "message"=>$message
    );
    echo json_encode($resultArray);
}
// } else {
//     http_response_code(405);
//     $response["message"] = "Method Not Allowed";
// }

// echo json_encode($response);
?>
