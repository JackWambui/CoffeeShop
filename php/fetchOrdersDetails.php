<?php
    require("../php/database_connection.php");
    header("Content-Type:application/json");
    $requestType = $_SERVER["REQUEST_METHOD"];
    // $message =  $requestType;
    $message;
    if($requestType === "GET"){
        $customerIDDB = $_GET["customerID"];
        // $message = $customerID;
        
        // $message = "see me";
        $preparedstmt1 = "SELECT * FROM orders WHERE customer_id = $customerIDDB";
        $preparedstmt1Result = $connection->query($preparedstmt1);
        $ordersDetailsFromDB = array();

        if($preparedstmt1Result->num_rows > 0){
            // $message = "Data is available";
           
            while($rows = $preparedstmt1Result->fetch_assoc()){
                $orderIDDB = $rows["order_id"];
                $orderNumberDB = $rows["order_number"];
                $orderStatusDB = $rows["order_status"];
                $createdAtDB = $rows["created_at"];

                $orderDetailFromDB = array(
                    "orderID"     => (int)$orderIDDB,
                    "orderNumber" => $orderNumberDB,
                    "orderStatus" => ucfirst($orderStatusDB),
                    "createdAt"   => $createdAtDB
                );

                array_push($ordersDetailsFromDB,$orderDetailFromDB);
            }
            $message = $ordersDetailsFromDB;
        }else{
            $message = "Data is not available";
        }
    }

    $result = array(
        "message"=>$message
    );

    echo json_encode($result);
    $connection->close();
?>