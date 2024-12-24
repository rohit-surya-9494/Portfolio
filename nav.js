
// Smooth Scrolling Functionality
document.querySelectorAll('.navi a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Navigation Link on Scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navi a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('activepage');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('activepage');
        }
    });
});

// Scroll-to-Top Button Functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.id = 'scrollTopBtn';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #E03B8B;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Button Click Alert
const connectBtn = document.querySelector('.button-box a:first-child');
if (connectBtn) {
    connectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for connecting with me! Reach out to me anytime.');
    });
}

const profileBtn = document.querySelector('.button-box a:last-child');
if (profileBtn) {
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Here’s my professional profile for your reference.');
    });
}
