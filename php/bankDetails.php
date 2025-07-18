<?php
    require("../php/database_connection.php");
        header("Content-Type:application/json");
        $json     = file_get_contents("php://input");
        $jsonData = json_decode($json,true);

        $paymentMode      = htmlspecialchars($jsonData["paymentOptionDB"]);
        $firstName        = htmlspecialchars($jsonData["firstNameDB"]);
        $lastName         = htmlspecialchars($jsonData["lastNameDB"]);
        $cardNumber       = htmlspecialchars($jsonData["cardNumberDB"]);
        $cardSecurityCode = htmlspecialchars((int)$jsonData["cardSecurityCodeDB"]);
        $cardExpiration   = htmlspecialchars($jsonData["cardExpirationDetailsDB"]);
        $orderTotalAmount = htmlspecialchars((float)$jsonData["orderTotalAmountDB"]);
        $message = "";
        
        $queryStmt = "SELECT * FROM bank WHERE mode_of_payment = '$paymentMode' AND 
                      first_name = '$firstName' AND last_name = '$lastName' AND 
                      card_number = '$cardNumber' AND security_code = $cardSecurityCode 
                      AND card_expiration = '$cardExpiration'";

        $queryResult = $connection->query($queryStmt);
        $bankBalanceAmount;
        $bankID;
        if($queryResult->num_rows > 0){
            while($rows=$queryResult->fetch_assoc()){
                $bankBalanceAmount = (float)$rows["balance"];
                $bankID = (int)$rows["bank_id"];
            }

            if($bankBalanceAmount < $orderTotalAmount){
                $message = "Transaction Failed! You have insufficient funds in your bank account.";
            }else{
                $bankBalanceAmount = $bankBalanceAmount - $orderTotalAmount;
                $queryUpdateBankBalance = "UPDATE bank SET balance = $bankBalanceAmount WHERE bank_id = $bankID"; 
                
                if($connection->query($queryUpdateBankBalance) === TRUE){
                    $message = "Payment is Approved";
                }
            }
        }else{
            $message = "Account Details Do not match.Please Contact your bank";
        }
        $array = array("message"=>$message);
        echo json_encode($array);
        
    $connection->close();
?>
