//Tables of Contents Button//
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const popupButton = document.getElementById('popupButton');
  const popupOverlay = document.getElementById('popupOverlay');
  const closeButton = document.querySelector('.close-btn');
  const actionButton = document.querySelector('.action-btn');
  
  // Open popup
  popupButton.addEventListener('click', function() {
    popupOverlay.style.display = 'block';
    setTimeout(() => {
      popupOverlay.classList.add('active');
    }, 10);
  });
  
  // Close popup
  closeButton.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
  });
  
  // Close when clicking outside content
  popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });
  
  // Action button example
  actionButton.addEventListener('click', function() {
    alert('Button clicked!');
    // Add your interactive functionality here
  });
});