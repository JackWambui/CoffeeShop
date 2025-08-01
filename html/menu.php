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

<body>
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
                <li><a href="../html/adminSignIn.html">ADMIN</a></li>
                <!-- <li class="dropdown">
                    <button class="dropbtn">CREATE ACCOUNT</button>
                    <div class="dropdown-content">
                        <a href="../html/signin.html#signin">SIGN IN</a>
                        <a href="../html/CreateAccount.html#signup">SIGN UP</a>
                    </div>
                </li> -->
                <li>
                    <a href="../html/shopping-cart.php">
                        <i class="fa-solid fa-cart-shopping order-cart">
                            <!--Try adding 0 value to cart-->
                            <span class="js-order-number"></span>
                        </i>
                    </a>
                </li>
                <?php
                   require("../php/approvedSessionLinks.php");
                ?>

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
       <section class="test-container">
        <div class="secondary-nav">
            <ul class="secondary-items">

            </ul>
            <form class="search-form" autocomplete="off">
                <label for="search"></label>
                <input type="search" id="searchProduct" class="js-search-input" name="queryProduct" placeholder="Search for Product of Choice">
                <!-- <button type="button" class="searchTestingBtn btn">
                     Search
                </button> -->
            </form>
        </div>
    </section>

    
    
    <section class="container js-categories-section">
        <h1>
            Our Products
        </h1>
        <div class="grid-container23 categoriesFeatures productTest js-products-details" id="js-categoriesFeatures">

        </div>
    </section>

    </main>

    <footer class="footer">
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
   <script src="../javascript/categoryScript.js"></script>
   <script src="../javascript/fetch-products.js"></script>
</body>

</html>
