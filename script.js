function toggleOverlay(eventId) {
    const overlay = document.getElementById(eventId);
    if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
    } else {
      document.querySelectorAll('.overlay').forEach(ol => ol.style.display = 'none');
      overlay.style.display = 'block';
    }
  }
  