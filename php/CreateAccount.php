<?php
require("../php/database_connection.php");
header("Content-Type: application/json");

$requestType = $_SERVER["REQUEST_METHOD"];
$response = [];

if ($requestType === "POST") {
    // Extract form data from POST
    $customerUserNameDB = $_POST["username"];
    $customerFirstNameDB = $_POST["First Name"];
    $customerLastNameDB = $_POST["Last Name"];
    $customerEmailDB = $_POST["Email"];

    // Prepare SQL statement
    $sql = "INSERT INTO customers (Customer_Username, Customer_FName, Customer_LName, Customer_EmailAddress)
            VALUES (?, ?, ?, ?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("ssss", $customerUserNameDB, $customerFirstNameDB, $customerLastNameDB, $customerEmailDB);

    // Execute and respond
    if ($stmt->execute()) {
        $response["message"] = "Account created successfully!";
    } else {
        http_response_code(500);
        $response["message"] = "Error creating account.";
    }

    $stmt->close();
} else {
    http_response_code(405);
    $response["message"] = "Method Not Allowed";
}

echo json_encode($response);
?>
