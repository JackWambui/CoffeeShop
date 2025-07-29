<?php
    require("../php/database_connection.php");
    header("Content-Type:application/json");
    $requestType = $_SERVER["REQUEST_METHOD"];
    if($requestType === "POST"){
        $message;
        $json = file_get_contents("php://input");
        $jsonData = json_decode($json,true);
        // $message = $jsonData;
        $customerNameDB        = htmlspecialchars(ucwords($jsonData["customerNamePHP"]));
        $customerEmailDB       = htmlspecialchars($jsonData["customerEmailPHP"]);
        $customerPhoneDB       = htmlspecialchars($jsonData["customerPhonePHP"]);
        $customerMessageDB     = htmlspecialchars($jsonData["customerMessagePHP"]);
        // $message =  $customerMessageDB; 
        // $customerMessageDB     = htmlspecialchars($jsonData["customerMessagePHP"]);

        $preparedQueryStmt2 = $connection->prepare("INSERT INTO reviews(customer_name,customer_email,customer_phone,customer_message) VALUE (?,?,?,?)");
        $preparedQueryStmt2->bind_param("ssdsi",$customerNameDB,$customerEmailDB,$customerPhoneDB,$customerMessageDB);
        $preparedQueryStmt2->execute();
        $message = "Feedback saved successfully.One of our customer representatives will be in touch!";
        
        $resultArray = array(
            "message"=>$message
        );
        echo json_encode($resultArray);
    }
?>