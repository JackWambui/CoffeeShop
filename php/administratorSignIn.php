<?php
    session_start();
    require("../php/database_connection.php");
    $emailPHP = $_POST["Email"];
    $passwordPHP = md5($_POST["Password"]);
    if(isset($emailPHP) && isset($passwordPHP)){
       $message;
       $queryStmt = "SELECT * FROM administrator WHERE email = '$emailPHP' AND password = '$passwordPHP'";
       $queryStmtResult = $connection->query($queryStmt);

       if($queryStmtResult->num_rows > 0){
           while($rows = $queryStmtResult->fetch_assoc()){
                $_SESSION["username"] = $rows["username"];
                header("Location:../html/admin.php");
           }
       }else{
        echo "<script>alert('Invalid Login Credentials.Please Try Again!')</script>";
        echo "<script>setTimeout(function(){
                      window.location.href = '../html/adminSignIn.html';  
                    },5);</script>";
       }
    }else{
        echo "Please input values";
    }
?>