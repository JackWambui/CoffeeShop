<?php
  require("../php/database_connection.php");
  header("Content-Type:application/json");

  $requestType = $_SERVER["REQUEST_METHOD"];
  $responseMessage;
  
  if($requestType === "GET"){
    $orderID = $_GET["order_id"];

    // $responseMessage = $orderID;

    $preparedStmtQuery = "SELECT order_items.order_items_id,orders.order_id,products.image,products.product_name,order_items.quantity,order_items.created_at
                          FROM order_items 
                          INNER JOIN orders
                          ON orders.order_id = order_items.order_id
                          INNER JOIN products
                          ON products.product_id = order_items.product_id
                          WHERE orders.order_id = $orderID
                          ORDER BY order_items.order_items_id ASC;";

    $preparedStmtQueryResult = $connection->query($preparedStmtQuery);

    $orderItemsArray = array();
    if($preparedStmtQueryResult->num_rows > 0){
        // $responseMessage = "Data is available";
        while($rows = $preparedStmtQueryResult->fetch_assoc()){
            $orderItemID = (int)$rows["order_items_id"];
            $productImage = $rows["image"];
            $productName = $rows["product_name"];
            $productQuantity = (int)$rows["quantity"];
            $orderCreatedAt = $rows["created_at"];

            $orderItemDetails = array(
                "order_item_id" => $orderItemID,
                "product_image" => $productImage,
                "product_name"  => $productName,
                "order_item_quantity" => $productQuantity,
                "order_created_at" => $orderCreatedAt
            );

            array_push($orderItemsArray,$orderItemDetails);
        }
        $responseMessage = $orderItemsArray;
    }else{
        $responseMessage = "No data is available";
    }
  }

  $result = array(
    "response"=>$responseMessage
  );

  echo json_encode($result);
?>