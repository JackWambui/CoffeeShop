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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
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
            </ul>
         
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Warm Welcome: A Cup of Inspiration</h1>
                <h2>Passionate Brewing: Every cup with care</h2>
                <div class="hero-sub">
                    <p>Fresh Beverages: Espresso to lattes</p>
                    <p>Quality Beans: Locally roasted finest</p>
                </div>
                <a href="#grid-container-1" class="btn">LEARN MORE</a>
            </div>
        </section>

        <section class="grid-container" id="grid-container-1">
            <div class="image">
                <img src="../images/about1.jpeg" alt="image">
            </div>
            <div class="grid-container-description">
     



                <p>
                   Established in 2019, <b>A Cup of Inspiration</b> was founded 
                </p>
                <p>
                     to bring people together over great coffee and a cozy atmosphere.
                </p>
                <p>
                        
                    Humble Beginnings: Started as a small café.
                </p>
                <p>
                     Community Favorite: Loved by friends and creatives.
                </p>
                <p>
                    Work-Friendly: A space for remote workers.
                </p>
                <p>
                    Inspiring Connections: Coffee brings people together
                </p>
            </div> 
        </section>

      <!--
        <section class="about">
            <h2>A CUP OF INSPIRIT</h2>
            <p>At A Cup of Inspiration, we believe in more than just great coffee - we believe in building a community.</p>
            
            <div class="features">
                <div class="feature">
                    <i class="fas fa-users"></i>
                    <h3>More Than Coffee</h3>
                    <p>We build a community</p>
                </div>
                <div class="feature">
                    <i class="fas fa-coffee"></i>
                    <h3>Stay & Enjoy</h3>
                    <p>Drinks and conversation.</p>
                </div>
                <!-- <div class="feature">
                    <i class="fas fa-utensils"></i>
                    <h3>Tasty Selection</h3>
                    <p>Pastries, sandwiches, snacks.</p>
                </div> 
                <div class="feature">
                    <i class="fas fa-couch"></i>
                    <h3>Perfect Spot</h3>
                    <p>Meet, work, or relax.</p>
                </div>
            </div>
        </section>
        -->  
    </main>

    <footer class="footer">
        <div class="social-links">
            <h3>Follow us:</h3>
            <div class="icons">
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"  target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://x.com/"  target="_blank"><i class="fab fa-twitter"></i></a>
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
</body>
</html>
