<?php
require("../php/database_connection.php");
header("Content-Type: application/json");

$requestType = $_SERVER["REQUEST_METHOD"];

if ($requestType === "POST") {
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);

    $username = $data["username"];
    $email = $data["email"];
    $password = $data["password"];

    $sql = "SELECT * FROM users WHERE username = '$username' AND email = '$email' AND password = '$password'";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode(["message" => "Login successful"]);
    } else {
        echo json_encode(["message" => "Invalid credentials"]);
    }
}
?>
