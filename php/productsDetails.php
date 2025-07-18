<?php
    require("../php/database_connection.php");
        header("Content-Type:application/json");
        $products = "SELECT * FROM products";
        $productsResult = $connection->query($products);
        $productsArray = array();
        if($productsResult->num_rows > 0){
            while($row=$productsResult->fetch_assoc()){
                $productID          = $row["product_id"];
                $productName        = $row["product_name"];
                $productImage       = $row["image"];
                $productPrice       = $row["price"];
                $productDescription = $row["description"];
                $productCategory    = $row["category_id"];

                $newProductArray = array(
                    "id"         => (int)$productID,
                    "name"       => $productName,
                    "image"      => $productImage,
                    "price"      => (float)$productPrice,
                    "description"=> $productDescription,
                    "category"   => (int)$productCategory
                );
                array_push($productsArray,$newProductArray);
            }
        }else{
            echo "no data is available";
        }
        $productsInformation = json_encode($productsArray);
        echo $productsInformation;
    $connection->close();
?>
