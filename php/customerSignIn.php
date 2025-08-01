<?php
    session_start();
    require("../php/database_connection.php");
    $usernamePHP = $_POST["username"];
    $emailPHP = $_POST["Email"];
    $passwordPHP = md5($_POST["Password"]);
    
    if(isset($usernamePHP) && isset($emailPHP) && isset($passwordPHP)){
       $message;
       $queryStmt = "SELECT * FROM customers WHERE Customer_Username = '$usernamePHP' AND Customer_EmailAddress = '$emailPHP' AND Customer_Password = '$passwordPHP'";
       $queryStmtResult = $connection->query($queryStmt);

       if($queryStmtResult->num_rows > 0){
           while($rows = $queryStmtResult->fetch_assoc()){
                $_SESSION["customerID"] = $rows["customer_id"];
                $_SESSION["username"] = $rows["Customer_Username"];
                header("Location:../html/menu.php");
           }
       }else{
        echo "<script>alert('Invalid Login Credentials.Please Try Again!')</script>";
        echo "<script>setTimeout(function(){
                      window.location.href = '../html/customerSignIn.html';  
                    },5);</script>";
       }
    }else{
        echo "Please input values";
    }
?>