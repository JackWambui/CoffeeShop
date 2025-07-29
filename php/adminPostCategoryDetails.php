<?php
  require("../php/database_connection.php");

  $requestType = $_SERVER["REQUEST_METHOD"];
  if($requestType === "POST"){
    header("Content-Type:application/json");
      $json = file_get_contents("php://input");
      $jsonData = json_decode($json,true);
      $message;
    
      $categoryName = htmlspecialchars($jsonData["categoryNamePHP"]);
      $imageInfor   = htmlspecialchars($jsonData["categoryImagePHP"]);

      $selectQueryStmt = "SELECT category_name FROM category WHERE category_name = '$categoryName'";
      $selectQueryStmtResult = $connection->query($selectQueryStmt);

      if($selectQueryStmtResult->num_rows > 0){
        $message = "$categoryName already exists.Please add another category.";
      }else{
        // $message = "Data is not available.";
        $preparedQueryStmt1 = $connection->prepare("INSERT INTO category(category_name,image) VALUE (?,?)");
        $preparedQueryStmt1->bind_param("ss",$categoryName,$imageInfor);
        $preparedQueryStmt1->execute();

        $message = "$categoryName category successfully created.";
      }

      $messageArray = array(
        "message"=>$message
      );

      echo json_encode($messageArray);
  } 
  


  // $categoryName = "saladsss";
  // $message = checkCategoryExists($categoryName);
  

  // $preparedQueryStmt1 = $connection->prepare("INSERT INTO category(category_name,image) VALUE (?,?)");
  // $preparedQueryStmt1->bind_param("ss",$categoryName,$imageInfor);
  // $preparedQueryStmt1->execute();

  // $message = "$categoryName category successfully inserted";

  
  // $message = checkCategoryExists($categoryName);
  // function checkCategoryExists($category_name_validate){
    
  //   // $category_name_validate
  //   // $selectQueryStmt = "SELECT category_name FROM category WHERE category_name === $category_name_validate";
  //   // $selectQueryStmtResult = $connection->query($selectQueryStmt);
  //   // if($selectQueryStmtResult->num_rows > 0){
  //   //   $output = "$category_name_validate already exists. Please add a different category.";
  //   // }else{
  //   //   $output = "$category_name_validate is good to be added.";
  //   // }
  //   return $output;
  // }

 
?>