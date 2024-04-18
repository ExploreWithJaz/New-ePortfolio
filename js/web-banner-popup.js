document.addEventListener("DOMContentLoaded", function() {
    // Show the popup when the page loads
    document.getElementById("imagePopup").classList.add("show");
  });
  
  function closePopup() {
    // Hide the popup with fade-out animation
    document.getElementById("imagePopup").classList.remove("show");
  }
  