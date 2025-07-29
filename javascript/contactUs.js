// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.feature').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const phone = form.querySelector("#phone").value.trim();
      const msg = form.querySelector("#message").value.trim();
  
      if (!name || !email || !phone || !msg) {
        alert("Please fill in all fields correctly.");
        return;
      }
  
      message.classList.remove("hidden");
      message.style.opacity = "1";
      message.style.visibility = "visible";
      form.reset();
  
      setTimeout(() => {
        message.style.opacity = "0";
        message.style.visibility = "hidden";
      }, 3000);
    });
  });

const jsSubmitFeedbackBtn = document.querySelector(".submitExperience-btns");

jsSubmitFeedbackBtn.addEventListener("click",postFeedback);

function postFeedback(){
    console.log("heelo");
    postFeedbacktoDB();
}

jsSubmitFeedbackBtn.addEventListener("click",postFeedback);

  async function postFeedbacktoDB(){
    const customerName = document.querySelector(".js_name").value.trim();
    const customerEmail = document.querySelector(".js_email").value.trim();
    const customerPhone = document.querySelector(".js_phone").value.trim();
    const customerMessage = document.querySelector(".js_message").value.trim();

    const feedbackObje = {
        customerNamePHP:customerName,
        customerEmailPHP:customerEmail,
        customerPhonePHP:customerPhone,
        customerMessagePHP:customerMessage
    };

    console.log(feedbackObje);

    const URLFeedbackLink = "../php/customerFeedback.php";
    const response = await fetch(URLFeedbackLink,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(feedbackObje)
    });
    const responseData = await response.json();

    console.log(responseData);
  }
  