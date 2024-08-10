function toggleOverlay(eventId) {
    const overlay = document.getElementById(eventId);
    if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
    } else {
      document.querySelectorAll('.overlay').forEach(ol => ol.style.display = 'none');
      overlay.style.display = 'block';
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Example: Adding rotation on hover for featurette images
    const featuretteImages = document.querySelectorAll('.featurette-image');
  
    featuretteImages.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.style.transform = 'rotateY(15deg) rotateX(15deg)';
      });
  
      image.addEventListener('mouseout', () => {
        image.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    });
  
    // Example: Adding rotation to footer on hover
    const footer = document.querySelector('footer');
  
    footer.addEventListener('mouseover', () => {
      footer.style.transform = 'rotateX(10deg)';
    });
  
    footer.addEventListener('mouseout', () => {
      footer.style.transform = 'rotateX(0deg)';
    });
  });
    