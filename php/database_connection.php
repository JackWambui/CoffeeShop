<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "coffeeshopdatabase";

    $connection = new mysqli($servername,$username,$password,$databaseName);

    if($connection->connect_error){
        die("Connection failed".$connection->connect_error);
    }
    // else{
    //     echo "Connected successfully to the ".$databaseName." database.";
    // }
?>
