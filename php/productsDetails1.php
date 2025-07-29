<?php
    require("../php/database_connection.php");
        header("Content-Type:application/json");
        $products = "SELECT products.product_id,products.product_name,products.image,
                     products.price,products.description,category.category_id,
                     category.category_name,products.created_at
                     FROM products
                     INNER JOIN category ON
                     products.category_id = category.category_id
                     ORDER BY products.created_at DESC;";

        $productsResult = $connection->query($products);
        $productsArray = array();
        if($productsResult->num_rows > 0){
            while($row=$productsResult->fetch_assoc()){
                $productID           = $row["product_id"];
                $productName         = $row["product_name"];
                $productImage        = $row["image"];
                $productPrice        = $row["price"];
                $productDescription  = $row["description"];
                $productCategory     = $row["category_id"];
                $productCategoryName = ucwords($row["category_name"]);
                $productCreatedAt    = $row["created_at"];

                $newProductArray = array(
                    "id"            => (int)$productID,
                    "name"          => $productName,
                    "image"         => $productImage,
                    "price"         => (float)$productPrice,
                    "description"   => $productDescription,
                    "category"      => (int)$productCategory,
                    "category_name" => $productCategoryName,
                    "createdAt"     => $productCreatedAt
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
