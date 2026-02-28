document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

hamburger.addEventListener('click', () => 
    console.log("Hamburger clicked");
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
