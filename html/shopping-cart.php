<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Cup of Inspiration | Coffee Shop</title>
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/createAccount.css">
     <link rel="stylesheet" href="../css/adminAccount.css">
    <link rel="stylesheet" href="../css/menuStyles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body class="js-shopping-cart-body">
    <header class="js-main-header">
        <nav>
            <div class="logo">
                <a href="#">
                    <img src="../images/logo.jpeg" alt="A Cup of Inspiration">
                </a>
            </div>
            <ul class="nav-links">
                <li><a href="../html/index.php">HOME</a></li>
                <li><a href="../html/about.php">ABOUT US</a></li>
                <li><a href="../html/menu.php">MENU</a></li>
                <li><a href="../html/contactUs.php">CONTACT US</a></li>
                <?php
                    require("../php/approvedSessionLinks.php");
                ?>
                <!-- <li class="dropdown">
                    <button class="dropbtn">CREATE ACCOUNT</button>
                    <div class="dropdown-content">
                        <a href="../html/signin.html#signin">SIGN IN</a>
                        <a href="../html/CreateAccount.html#signup">SIGN UP</a>
                    </div>
                </li> -->
                <li>
                    <a href="#">
                        <i class="fa-solid fa-cart-shopping order-cart">
                            <span class="js-order-number"></span>
                        </i>
                    </a>
                </li>
            </ul>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>

    </header>
    <!--Test Code-->
    <main>
       <!-- <section class="test-container">
        <div class="secondary-nav">
            <ul class="secondary-items">

            </ul>
            <form class="search-form">
                <label for="search"></label>
                <input type="search" id="searchProduct" name="queryProduct" placeholder="Search for Product of Choice">
            </form>
        </div>
    </section> -->
    
    <section class="container shopping-cart-features">
        <h1>
           Shopping Cart
        </h1>
        <!-- <div class="grid-container23 categoriesFeatures productTest">

        </div> -->
        <div class="ordersFeatures">
       
        </div>
    </section>
    <?php
        if(isset($_SESSION["customerID"]) && isset($_SESSION["username"])){
            $customerID = (int)$_SESSION["customerID"];
           echo "
            <section class='container js-order-payments js-class-none' id='js-order-payments'>
                <div class='orders-payments-header'>
                    <h3>
                        Payment Form
                    </h3>
                    <div class='js_customer_id' data-id='$customerID' style='display:none;'></div>
                </div>
                <form id='form-payments' class='js-form-payments' autocomplete='on'>
                    <div class='form-control payments-options-radios'>
                        <label for='paymentOptions'>
                            <b>Payment Methods</b>
                        </label>
                        <div class='radios-options'>
                            <div class='radio-option'>
                                <input type='radio' id='paymentOptions' name='paymentOptionsInput' class='js-payment-options' value='MasterCard'>
                                <label for='paymentOptions'>MasterCard</label>
                            </div>
                            <div class='radio-option'>
                                <input type='radio' id='paymentOptions' name='paymentOptionsInput' class='js-payment-options' value='VISA'>
                                <label for='paymentOptions'>VISA</label>
                            </div>
                            <div class='radio-option'>
                                <input type='radio' id='paymentOptions' name='paymentOptionsInput' class='js-payment-options' value='PayPal'>
                                <label for='paymentOptions'>PayPal</label>
                            </div>
                        
                        </div>
                    </div>
                    <div class='form-control'>
                        <label for='firstName'>First Name</label>
                        <input type='text' id='firstName' name='firstNameInput' class='js-first-name' required>
                    </div>
                    <div class='form-control'>
                        <label for='lastName'>Last Name</label>
                        <input type='text' id='lastName' name='lastNameInput' class='js-last-name' required>
                    </div>
                    <div class='form-control'>
                        <label for='cardNumber'>Card Number</label>
                        <input type='text' id='cardNumber' name='cardNumberInput' class='js-card-number' placeholder='0000 0000 0000 0000' required>
                    </div>
                    <div class='form-control'>
                        <label for='securityCode'>Security Code</label>
                        <input type='text' id='securityCode' name='securityCodeInput' class='js-security-code' placeholder='CVC' maxlength='3' required>
                    </div>
                    <div class='form-control'>
                        <label for='cardExpiration'>Card Expiration</label>
                        <input type='text' id='cardExpiration' name='cardExpirationInput' class='js-card-expiration' placeholder='MM/YY' required>
                    </div>
                    <div class='form-control submit-payment-btn'>
                        <input type='submit'  class='btn-primary js-submit-payment-details-btn' value='Complete Payment'>
                    </div>      
                </form>
            </section>
           ";
        }else{
            echo " <p style='text-align:center;margin-top:16px;'><b>Please SignIn / Login to Complete Your Order Payment.</b>";
        }
    ?>
   
    <section class="alert-message-section">
        
    </section>

    </main>

    <footer class="footer footer-test">
        <div class="social-links">
            <h3>Follow us:</h3>
            <div class="icons">
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://x.com/" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
        <div class="copyright">
            <p>Copyright &copy; 2025 A Cup of Inspiration</p>
        </div>
    </footer>

    <script src="../javascript/script.js"></script>
    <script src="../javascript/getCartOrders.js"></script>
    <script src="../javascript/paymentScript.js"></script>
    <script src="../javascript/alertMessagesScript.js"></script>
</body>

</html>
