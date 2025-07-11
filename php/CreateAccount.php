<?php
// Connecting  to database - remember to use include
    require("../php/database_connection.php");
    header("Content-Type:application/json");
    $array = array(
        "message"=>"See me"
    );
    echo json_encode($array);
?>