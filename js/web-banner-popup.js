document.addEventListener("DOMContentLoaded", function() {
    // Show the popup when the page loads
    document.getElementById("imagePopup").style.display = "block";
    fadeIn(document.getElementById("imagePopup"));
  });
  
  function closePopup() {
    // Fade out the popup and then hide it
    fadeOut(document.getElementById("imagePopup"), function() {
      document.getElementById("imagePopup").style.display = "none";
    });
  }
  
  // Fade in function
  function fadeIn(element, duration = 300) {
    let opacity = 0;
    element.style.opacity = opacity;
  
    const interval = 10;
    const deltaOpacity = 1 / (duration / interval);
  
    const fadeInterval = setInterval(() => {
      opacity += deltaOpacity;
      element.style.opacity = opacity;
  
      if (opacity >= 1) {
        clearInterval(fadeInterval);
      }
    }, interval);
  }
  
  // Fade out function
  function fadeOut(element, callback, duration = 300) {
    let opacity = 1;
    element.style.opacity = opacity;
  
    const interval = 10;
    const deltaOpacity = 1 / (duration / interval);
  
    const fadeInterval = setInterval(() => {
      opacity -= deltaOpacity;
      element.style.opacity = opacity;
  
      if (opacity <= 0) {
        clearInterval(fadeInterval);
        callback();
      }
    }, interval);
  }
  