// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        // For now, we'll just show the success message
        console.log('Form data:', data);
        
        // Show success message
        const message = document.getElementById('form-message');
        message.style.display = 'block';
        
        // Clear the form
        contactForm.reset();
        
        // Hide message after 3 seconds
        setTimeout(function() {
            message.style.display = 'none';
        }, 3000);
    });
}

// Print form handling
const printForm = document.getElementById('print-form');
if (printForm) {
    printForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(printForm);
        const data = Object.fromEntries(formData);
        
        console.log('Print request:', data);
        
        const message = document.getElementById('form-message');
        message.style.display = 'block';
        
        printForm.reset();
        
        setTimeout(function() {
            message.style.display = 'none';
        }, 3000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
