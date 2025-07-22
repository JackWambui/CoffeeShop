<?php
require("../php/database_connection.php");
header("Content-Type: application/json");

// Only accept POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Method not allowed"]);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (
    empty($input['firstName']) || empty($input['lastName']) || empty($input['email']) || empty($input['password'])
) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Please fill in all required fields"]);
    exit;
}

$firstName = $connection->real_escape_string($input['firstName']);
$lastName = $connection->real_escape_string($input['lastName']);
$email = $connection->real_escape_string($input['email']);
$password = $input['password']; // Raw password

// Check if email already exists
$sql_check = "SELECT id FROM customers WHERE email = '$email' LIMIT 1";
$result_check = $connection->query($sql_check);

if ($result_check && $result_check->num_rows > 0) {
    http_response_code(409); // Conflict
    echo json_encode(["message" => "Email already registered"]);
    exit;
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert user into database
$sql = "INSERT INTO customers (first_name, last_name, email, password) VALUES ('$firstName', '$lastName', '$email', '$hashedPassword')";

if ($connection->query($sql) === TRUE) {
    http_response_code(201); // Created
    echo json_encode(["message" => "Account created successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Database error: " . $connection->error]);
}
