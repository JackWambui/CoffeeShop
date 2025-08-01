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
    <link rel="stylesheet" href="../css/contactUs.css">
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
                  <h1>HI! HOW CAN WE HELP YOU?</h1>
              </div>
          </section>
  
          <!-- <section class="hero-description-1" id="hero-description-12">
              <div class="div-image">
                  <img src="images/coffee.jpg" alt="image">
              </div>
           
              <div>
                  <h2>
                      At A Cup of Inspiration, we believe in more than just great coffee – we believe in building a community. 
                  </h2>
                  <p>
                      More Than Coffee: We build a community.
                  </p>
                  <p>
                      Stay & Enjoy: Drinks and conversation.
                  </p>
                  <p>
                      Tasty Selection: Pastries, sandwiches, snacks.
                  </p>
                  <p>
                      Perfect Spot: Meet, work, or relax.
                  </p>
              </div>
                    
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
                  <div class="feature">
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
          </section> -->
          <!-- <section class="contact-section">
              <div class="contact-left">
                <h3><strong>Opening Hours:</strong></h3>
                <p>Monday – Friday: 8:00 am to 7:00 pm</p>
                <p>Saturday – Sunday: 10:00 am to 5:00 pm</p>
            
                <p>📍 4000 Queen Street, QLD</p>
                <p>📞 0324567</p>
                <p>📧 cupofinspiration@gmail.com.au</p>
                <p>🌐 <a href="#">www.cupofinspiration.com.au</a></p>
              </div>
            
              <div class="contact-right">
                <h3>YOUR EXPERIENCE</h3>
                <form id="contactForm">
                  <input type="text" id="name" placeholder="Name" required />
                  <input type="email" id="email" placeholder="Email" required />
                  <input type="tel" id="phone" placeholder="Phone" />
                  <label for="message">WANT TO SHARE MORE OF YOUR EXPERIENCE?</label>
                  <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
                  <button type="submit">SUBMIT</button>
                  <p id="formMessage" class="hidden">Submitted ✅</p>
                </form>
              </div>
            </section>
             -->

          <section class="contact-section">
            <div class="contact-left">
              <h3><strong>Opening Hours:</strong></h3>
              <p>Monday – Friday: 8:00 am to 7:00 pm</p>
              <p>Saturday – Sunday: 10:00 am to 5:00 pm</p>
          
              <p>📍 4000 Queen Street, QLD</p>
              <p>📞 0324567</p>
              <p>📧 cupofinspiration@gmail.com.au</p>
              <p>🌐 <a href="#">www.cupofinspiration.com.au</a></p>
            </div>
          
            <div class="contact-right">
              <h3>YOUR EXPERIENCE</h3>
              <form id="contactForm">
                <input type="text" id="name" placeholder="Name"     class="js_name"required />
                <input type="email" id="email" placeholder="Email"  class="js_email" required />
                <input type="tel" id="phone" placeholder="Phone"    class="js_phone"/>
                <label for="message">WANT TO SHARE MORE OF YOUR EXPERIENCE?</label>
                <textarea id="message" rows="5" placeholder="Your message..." class="js_message"required></textarea>
                <button type="submit" class="submitExperience-btns">SUBMIT</button>
                <p id="formMessage" class="hidden">Submitted ✅</p>
              </form>
            </div>
          </section>
          
        
            
      </main>
  
      <footer>
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
      <!-- <script src="../javascript/contactUs.js"></script> -->
      <script src="../javascript/contactUs1.js"></script>
  </body>
  </html>