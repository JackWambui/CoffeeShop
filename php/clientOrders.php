<?php
    require("../php/database_connection.php");
    $requestType = $_SERVER["REQUEST_METHOD"];
    $message = "";

    if($requestType === "POST"){
        $json = file_get_contents("php://input");
        $jsonOrderData = json_decode($json,true);
        $orderUniqueIdentifier = rand(1,100000);
        $orderArrayLength = count($jsonOrderData);
        //Try Again!!!!
        // $message = "";

        for($row=0; $row < $orderArrayLength; $row++){
            $productID    = htmlspecialchars($jsonOrderData[$row]['id']);
            $productName  = htmlspecialchars($jsonOrderData[$row]['name']);
            $productQty   = htmlspecialchars($jsonOrderData[$row]['quantity']);
            $productPrice = htmlspecialchars($jsonOrderData[$row]['price']);
            // $orderUniqueIdentifier;
            //Convert to user details during the session.
            $customerID = 1;

            $preparedStmt=$connection->prepare("INSERT INTO orders(order_number,customer_id,product_id,quantity) VALUES (?,?,?,?)");
            $preparedStmt->bind_param("iiii",$orderUniqueIdentifier,$customerID,$productID,$productQty);

            $preparedStmt->execute();

            $message = "Order Placed Successfully, Please be patient while we process it.";
            $preparedStmt->close();
        }
        //Try Again!!!
        // $result = array(
        //         "message"=>$message
        // );
        // echo json_encode($result);
    }else{
        //Try Again!!
        $message = "Invalid method. Please try again later.";
    }

        $result = array(
                "message"=>$message
        );
        echo json_encode($result);
    $connection->close();
?>