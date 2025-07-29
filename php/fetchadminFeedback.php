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

                 $EmpDetailFromDB = array(
                    "emp_Id"     => (int)$empIDDB,
                    "empfirstname" =>$empfirstnameDB,
                    "emplastname" =>$emplastnameDB,
                    "empemail" =>$empemailDB,
                    "empposition" =>$emppositionDB,
                    "empStart_date" =>$empStart_dateDB, 
                    "createdAt"=>$empcreated_atDB
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
        $employeesInformation = json_encode($employeesArray);
        echo $employeesInformation;
    $connection->close();
?>




 