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

    $message = "hello";

      $customerUserNameDB = $jsonData["usernamePHP"];
      $customerEmailDB = $jsonData["emailPHP"];
      $customerPassword = password_hash($jsonData["passwordPHP"], PASSWORD_DEFAULT);

    //   $message = $customerPassword;
    // $selectQueryStmt = "SELECT * FROM customers WHERE username = '$customerUserNameDB' AND email = '$customerEmailDB' AND password = '$customerPassword'";
    // $selectQueryStmtResult = $connection->query($selectQueryStmt);

    // if($selectQueryStmtResult->num_rows > 0){
    //     $message = "$categoryName already exists.Please add another category.";
    // }else{
    //     $message = "Invalid Details.Please Try Again!!";
    // }
    // $message = "$categoryName already exists.Please add another category.";

    //   $preparedStmt1 = $connection->prepare("INSERT INTO customers(Customer_Username,Customer_FName,Customer_LName,Customer_EmailAddress,Customer_Password) VALUE (?,?,?,?,?)");
    //   $preparedStmt1->bind_param("sssss",$customerUserNameDB,$customerFirstNameDB,$customerLastNameDB,$customerEmailDB,$customerPassword);
    //   $preparedStmt1->execute();
    //   $message = "Account created successfully!";
    
    // $customerEmailDB = $jsonData["emailPHP"];
    // $customerPassword = $jsonData["passwordPHP"];

    // // Prepare SQL statement
    // $sql = "INSERT INTO customers (Customer_Username,Customer_FName,Customer_LName,Customer_EmailAddress,Customer_Password)
    //         VALUES (?, ?, ?, ?,?)";
    // $stmt = $connection->prepare($sql);
    // $stmt->bind_param("sssss", $customerUserNameDB,$customerFirstNameDB,$customerLastNameDB,$customerEmailDB,$customerPassword);
    // $stmt->execute();
    // $message = "Account created successfully!";

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

