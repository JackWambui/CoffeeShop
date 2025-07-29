<!--
// Connecting  to database - remember to use include
    // require("../php/database_connection.php");
    // header("Content-Type:application/json");

    //Gets the type of method being sent in the api
    // $requestType = $_SERVER["REQUEST_METHOD"];
    // $requestType = "POST";


    // if ($requestType === "POST") {
        // Extract form data from POST
        // $json = file_get_contents("php://input");
        // $jsonData = json_decode($json,true);

        // $customerUserNameDB = $jsonData["usernamePHP"];
        // $customerEmailDB = $jsonData["emailPHP"];
        // $customerPassword = password_hash($jsonData["passwordPHP"], PASSWORD_DEFAULT);

        // $message = $customerPassword;

    // $preparedStmt1 = $connection->prepare("INSERT INTO customers(Customer_Username,Customer_EmailAddress,Customer_Password) VALUE (?,?,?)");
    // }
    // $preparedStmt1->bind_param("sss",$customerUserNameDB,$customerEmailDB,$customerPassword);
    // $preparedStmt1->execute();
//         $selectQueryStmt = "SELECT category_name FROM category WHERE category_name = '$categoryName'";
//         $selectQueryStmtResult = $connection->query($selectQueryStmt);

//         $selectQueryStmtResult->num_rows > 0
//          $message = "$categoryName already exists.Please add another category.";
//     }

<?php
require("../php/database_connection.php");
header("Content-Type: application/json");

$requestType = $_SERVER["REQUEST_METHOD"];

if ($requestType === "POST") {
    // Get JSON data from request body
    $json = file_get_contents("php://input");
    $jsonData = json_decode($json, true);

    // Extract variables
    $customerUserNameDB = $jsonData["usernamePHP"];
    $customerEmailDB = $jsonData["emailPHP"];
    $customerPasswordHashed = password_hash($jsonData["passwordPHP"], PASSWORD_DEFAULT);

    // Check if user already exists
    $checkStmt = $connection->prepare("SELECT Customer_ID FROM customers WHERE Customer_EmailAddress = ? OR Customer_Username = ?");
    $checkStmt->bind_param("ss", $customerEmailDB, $customerUserNameDB);
    $checkStmt->execute();
    $checkStmt->store_result();

    if ($checkStmt->num_rows > 0) {
        echo json_encode([
            "status" => "error",
            "message" => "Username or email already exists"
        ]);
    } else {
        // Insert new customer
        $insertStmt = $connection->prepare("INSERT INTO customers (Customer_Username, Customer_EmailAddress, Customer_Password) VALUES (?, ?, ?)");
        $insertStmt->bind_param("sss", $customerUserNameDB, $customerEmailDB, $customerPasswordHashed);

        if ($insertStmt->execute()) {
            echo json_encode([
                "status" => "success",
                "message" => "Signup successful"
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Database error: " . $insertStmt->error
            ]);
        }

        $insertStmt->close();
    }

    $checkStmt->close();
    $connection->close();
}
?>
