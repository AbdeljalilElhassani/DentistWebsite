window.onscroll = function() {
    // Get the navbar element
    var navbar = document.querySelector('.navbar');
  
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
  
    // Check if the user has scrolled to the position of the navbar
    if (window.pageYOffset >= sticky) {
      // If so, add the 'sticky' class to the navbar
      navbar.classList.add('sticky');
    } else {
      // Otherwise, remove the 'sticky' class from the navbar
      navbar.classList.remove('sticky');
    }
  };


  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - window.innerHeight / 2 + element.offsetHeight / 2;
      
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Add event listeners to each navbar link
  const navLinks = document.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });



  // Get references to the element and the button
const elementToToggle = document.getElementById('nav-links');
const toggleButton = document.getElementById('navbar-toggle');

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
  // Check if the element already has the class
  if (elementToToggle.classList.contains('mobile-show')) {
    // If it has the class, remove it
    elementToToggle.classList.remove('mobile-show');
  } else {
    // If it doesn't have the class, add it
    elementToToggle.classList.add('mobile-show');
  }
});


function goToLanguagePage(selectElement) {
  var selectedValue = selectElement.value;
  if (selectedValue) {
      window.location.href = selectedValue;
  }
}