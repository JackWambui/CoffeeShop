<?php
     if(isset($_SESSION["customerID"]) && isset($_SESSION["username"])){
        $username = $_SESSION["username"];
        $customerID = $_SESSION["customerID"];
            echo "<li>
                <a href='../html/orders.php'>
                    Orders
                </a>
                </li>
                <li>
                <a href='#'>
                    <b>Welcome, $username</b>
                </a>
                </li>
                <li>
                <a href='../php/customerLogout.php' class='btn-tertiary'>
                    Logout
                </a>
                </li>
                ";
        
    }else{
        echo "
            <li class='dropdown'>
                <button class='dropbtn'>CREATE ACCOUNT</button>
                <div class='dropdown-content'>
                    <a href='../html/customerSignIn.html'>SIGN IN</a>
                    <a href='../html/CreateAccount.html#signup'>SIGN UP</a>
                </div>
            </li>
        ";
    }
?>