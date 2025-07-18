<?php
require("../php/database_connection.php");
$requestType = $_SERVER["REQUEST_METHOD"];
$message = "";

    if($requestType === "POST"){
        $json = file_get_contents("php://input");
        $jsonOrderData = json_decode($json,true);
        $orderUniqueIdentifier = "ORD-".date("Ymd")."-".random_int(1,999);
        // $message = $orderUniqueIdentifier;
        $orderArrayLength = count($jsonOrderData);
        //Try Again!!!!
        // $message = "";
        $customerID = 1;
        $orderStatus = "processing";

        $preparedStmt1 = $connection->prepare("INSERT INTO orders(order_number,customer_id,order_status)VALUE (?,?,?)");
        $preparedStmt1->bind_param("sis",$orderUniqueIdentifier,$customerID,$orderStatus);
        $preparedStmt1->execute();

        $order_ID = $connection->insert_id;
        // $message = $order_ID;
        $modeOfPaymentValue;
        $totalOrderPrice = 0;
        //Refactor into function
        for($row=0; $row < $orderArrayLength; $row++){
            $productID    = htmlspecialchars($jsonOrderData[$row]['id']);
            $productName  = htmlspecialchars($jsonOrderData[$row]['name']);
            $productQty   = (int)htmlspecialchars($jsonOrderData[$row]['quantity']);
            $modeOfPaymentDB = htmlspecialchars($jsonOrderData[$row]['modeOfPayment']);
            $productPrice = (float)htmlspecialchars($jsonOrderData[$row]['price']);

            $totalProductPrice = $productQty * $productPrice;
            // $message = (float)$productPrice;
            // $orderUniqueIdentifier;
            //Convert to user details during the session.
            // $customerID = 1;
            $modeOfPaymentValue = $modeOfPaymentDB;
            $totalOrderPrice = $totalOrderPrice + $totalProductPrice;
            $preparedStmt2=$connection->prepare("INSERT INTO order_items(order_id,product_id,quantity) VALUES (?,?,?)");
            $preparedStmt2->bind_param("iii",$order_ID,$productID,$productQty);

            $preparedStmt2->execute();

            $message = "Order Placed Successfully, Please be patient while we process it.";
            // $preparedStmt2->close();
        }
        //Test Code -- Remember
        // $message = $modeOfPaymentTest;
        // $message = $totalOrderPrice;

        //Refactor into function      
        $preparedStmt3 = $connection->prepare("INSERT INTO payments(order_id,mode_of_payment,total_order_cost,amount_paid)VALUES(?,?,?,?)");
        $preparedStmt3->bind_param("isdd",$order_ID,$modeOfPaymentValue,$totalOrderPrice,$totalOrderPrice);
        $preparedStmt3->execute();

        // Try Again !!! Function Call
        // saveOrderDetailsToDB($order_ID,$jsonOrderData);
        // $preparedStmt1->close();
    }else{
        //Try Again!!
        $message = "Invalid method. Please try again later.";
    }

    //Try Again!!!
    // function saveOrderDetailsToDB($orderIdentificationNumber,$orderData){
    //     // $orderArrayLength = count($orderData);
    //     // for($row=0; $row < $orderArrayLength; $row++){
    //     //     $productID    = htmlspecialchars($orderData[$row]['id']);
    //     //     $productName  = htmlspecialchars($orderData[$row]['name']);
    //     //     $productQty   = htmlspecialchars($orderData[$row]['quantity']);
    //     //     // $productPrice = htmlspecialchars($jsonOrderData[$row]['price']);
    //     //     // $orderUniqueIdentifier;
    //     //     //Convert to user details during the session.
    //     //     // $customerID = 1;

    //     //     // $preparedStmt2=$connection->prepare("INSERT INTO order_items(order_id,product_id,quantity) VALUES (?,?,?)");
    //     //     // $preparedStmt2->bind_param("iii",$orderIdentificationNumber,$productID,$productQty);

    //     //     // $preparedStmt2->execute();
            
    //     //     // $output = $productID;
    //     //     // $output = $productName;
    //     //     // $output = $productQty;
    //     //     $output = $orderIdentificationNumber
    //     //     // $output = "Order Placed Successfully, Please be patient while we process it.";
    //     //     return $output;
    //     // }
    //     $ordersInfo = $orderData[$row]['name'];
    //     return $ordersInfo;
    // }
    $result = array(
            "message"=>$message
    );
    echo json_encode($result);
$connection->close();
?>
