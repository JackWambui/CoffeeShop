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
                    <button class="dropbtn">ADMIN ACCOUNT</button>
                    <div class="dropdown-content">
                        <a href="../html/adminSignIn.html">SIGN IN</a>
                        <a href="../html/adminAccount.html">SIGN UP</a>
                    </div>
                </li> -->
                <!-- <li class="dropdown">
                    <button class="dropbtn">CREATE ACCOUNT</button>
                    <div class="dropdown-content">
                        <a href="../html/signin.html#signin">SIGN IN</a>
                        <a href="../html/CreateAccount.html#signup">SIGN UP</a>
                    </div>
                </li> -->
                 <?php
                   require("../php/approvedSessionLinks.php");
                ?>
                <li>
                    <a href="../html/shopping-cart.php">
                        <i class="fa-solid fa-cart-shopping order-cart">
                            <span class="js-order-number"></span>
                        </i>
                    </a>
                </li>
            </ul>
            <div class="dropdown">
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
    <section>
        <div class="js_product_title">
                <div>
                    <a href="../html/menu.php">
                        Go Back
                    </a>
                </div>
                <!-- <h1>
                    Order Number - <span class="js_specific_order_number"></span>
                </h1> -->
            </div>
    </section>
    
    <section class="container js-categories-section">
        <!-- <h1 class="js-product-name">
            Our Products
        </h1> -->

        <!-- Remember to remove this code -->
        <!-- <h2>Free Code</h2> -->
        <!-- Remember to remove this code -->

        <div class="grid-container23 productFeatures1">

        </div>
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
    <script src="../javascript/fetch-products.js"></script>
    <script src="../javascript/specificProductsDetails.js"></script>
</body>

</html>
