<?php
    require("../php/database_connection.php");
        header("Content-Type:application/json");

        $queryStmt   = "SELECT * FROM category";
        $queryResult = $connection->query($queryStmt);
        $message = "";
        $categoryArray = array();
        if($queryResult->num_rows > 0){
            // $message = "data is available";
            while($row = $queryResult->fetch_assoc()){
                $categoryDBArray = array(
                    "id"    => (int)$row["category_id"],
                    "name"  => ucfirst($row["category_name"]),
                    "image" => $row["image"]
                );   
                array_push($categoryArray,$categoryDBArray);
            }
        echo json_encode($categoryArray);
        }else{
            $message = "No category information is available!";
            $array = array("message"=>$message);
            echo json_encode($array);
        }
        
    $connection->close();  
?>
