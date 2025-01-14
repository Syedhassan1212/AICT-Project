
// Scroll animation for sections
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight;
  
    sections.forEach((section) => {
      if (scrollPosition > section.offsetTop + 100) {
        section.classList.add("visible");
      }
    });
  });
  
  // Slide effect for elements
  const serviceItems = document.querySelectorAll(".service-item");
  
  serviceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.classList.add("slide-in");
  });
  
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down, hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up, show navbar
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

