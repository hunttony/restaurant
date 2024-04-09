function toggleNav(open) {
  var overlay = document.getElementById("popUpNav");
  var hamburger = document.querySelector(".hamburger");
  var addCart = document.getElementById("orders");

  if (open) {
      overlay.classList.add("active");
      hamburger.classList.add("is-active");
      
  } else {
      overlay.classList.remove("active");
      hamburger.classList.remove("is-active");
  }
}

// Add event listener to the hamburger menu icon
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  toggleNav(!hamburger.classList.contains("is-active"));
});

var closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", function() {
  toggleNav();
});

// Add event listener to close the menu when clicking outside or on a link
var overlay = document.getElementById("popUpNav");
overlay.addEventListener("click", function(event) {
  if (!event.target.closest(".overlay-content")) {
      toggleNav(false);
  }
});

// Add event listener to close the menu when clicking on a link inside the menu
/* var links = document.querySelectorAll(".overlay-content a");
links.forEach(function(link) {
  link.addEventListener("click", function() {
      toggleNav(false);
  });
}); */

function toggleMenu() {
  document.getElementById("menu-content").classList.toggle("show");  
}



document.querySelector('.scroll-left').addEventListener('click', function() {
  document.querySelector('.menu-scroll').scrollBy({
    left: -670, // Adjust scroll amount as needed
    behavior: 'smooth'
  });
});

document.querySelector('.scroll-right').addEventListener('click', function() {
  document.querySelector('.menu-scroll').scrollBy({
    left: 670, // Adjust scroll amount as needed
    behavior: 'smooth'
  });
});

$(document).ready(function() {
  // Function to update position of below-div
  function updateBelowDivPosition() {
    var dynamicHeightDivHeight = $('.menu-container').outerHeight(true);
    $('.below-div').css('top', dynamicHeightDivHeight + 'px');
  }

  // Call the function initially
  updateBelowDivPosition();

  // Update the position whenever the height of dynamic-height-div changes
  $(window).resize(updateBelowDivPosition);
});


    // JavaScript to prevent default behavior and load pages dynamically
    document.addEventListener('DOMContentLoaded', function() {
      // Add event listener to overlay links
  
      var backButton = document.getElementById('backButton');
  
  // Add event listener to the back button
  backButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default button behavior
      // Clear the content of the overlay
      document.getElementById('overlay-content').innerHTML = '';
      // Remove the active class to hide the overlay
      document.getElementById('popUpNav').classList.remove('active');
  });
  
      var overlayLinks = document.querySelectorAll('#popUpNav .overlay-content a');
      overlayLinks.forEach(function(link) {
          link.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default link behavior
  
              // Load content of the linked page into the overlay
              var href = link.getAttribute('href');
              loadPageIntoOverlay(href);
          });
      });
  });
  
  function loadPageIntoOverlay(url) {
      var overlayContent = document.getElementById('overlay-content-frame');
  
      // Fetch the content of the page
      fetch(url)
          .then(response => response.text())
          .then(html => {
              // Insert the fetched HTML into the overlay content container
              overlayContent.innerHTML = html;
              // Add the active class to the overlay to keep it open
              document.getElementById('container').classList.add('active');
          })
          .catch(error => {
              console.error('Error fetching page content:', error);
          });
  }