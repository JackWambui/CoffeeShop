<?php
    require("../php/database_connection.php");
        header("Content-Type:application/json");
        $employees = "SELECT * FROM employees";
        $employeesResult = $connection->query( $employees);
        $employeesArray = array();
        if($employeesResult->num_rows > 0){
            while($rows=$employeesResult->fetch_assoc()){
                $empIDDB = $rows["emp_Id"];
                $empfirstnameDB = $rows["firstname"];
                $emplastnameDB = $rows["lastname"];
                $empemailDB = $rows["email"];
                $emppositionDB = $rows["position"];
                $empStart_dateDB = $rows["Start_date"];
                $empcreated_atDB = $rows["created_at"];
                $empupdatedDB = $rows["updated"];

                 $EmpDetailFromDB = array(
                    "emp_Id"     => (int)$empIDDB,
                    "empfirstname" =>$empfirstnameDB,
                    "emplastname" =>$emplastnameDB,
                    "empemail" =>$empemailDB,
                    "empposition" =>$emppositionDB,
                    "empStart_date" =>$empStart_dateDB,  
                );
             

                // $orderDetailFromDB = array(
                //     "orderID"     => (int)$orderIDDB,
                //     "orderNumber" => $orderNumberDB,
                //     "orderStatus" => ucfirst($orderStatusDB),
                //     "createdAt"   => $createdAtDB
                // );

                array_push($employeesArray,$EmpDetailFromDB );
            }
        }else{
            echo "no data is available";
        }
        $productsInformation = json_encode($productsArray);
        echo $productsInformation;
    $connection->close();
?>




  // $message = "see me";
        $preparedstmt1 = "SELECT * FROM employees";
        $preparedstmt1Result = $connection->query($preparedstmt1);
        $ordersDetailsFromDB = array();

        if($preparedstmt1Result->num_rows > 0){
            // $message = "Data is available";
           
            while($rows = $preparedstmt1Result->fetch_assoc()){
                $empIDDB = $rows["emp_Id"];
                $empfirstnameDB = $rows["firstname"];
                $emplastnameDB = $rows["lastname"];
                $empemailDB = $rows["email"];
                $emppositionDB = $rows["position"];
                $empStart_dateDB = $rows["Start_date"];
                $empcreated_atDB = $rows["created_at"];
                $empupdatedDB = $rows["updated"];

                 $EmpDetailFromDB = array(
                    "emp_Id"     => (int)$empIDDB,
                    "empfirstname" =>$empfirstnameDB,
                    "emplastname" =>$emplastnameDB,
                    "empemail" =>$empemailDB,
                    "empposition" =>$emppositionDB,
                    "empStart_date" =>$empStart_dateDB,  
                );
             

                // $orderDetailFromDB = array(
                //     "orderID"     => (int)$orderIDDB,
                //     "orderNumber" => $orderNumberDB,
                //     "orderStatus" => ucfirst($orderStatusDB),
                //     "createdAt"   => $createdAtDB
                // );

                array_push($ordersDetailsFromDB,$orderDetailFromDB);
            }
            $message = $ordersDetailsFromDB;
        }else{
            