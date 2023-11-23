document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateSpeed, handleGeolocationError, {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    });

    // Update speed every 0.1 seconds (100 milliseconds)
    setInterval(updateSpeed, 100);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});

function updateSpeed() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const speedElement = document.getElementById('speed');

    if (position.coords.speed !== null) {
      const speed = position.coords.speed * 3.6; // Convert m/s to km/h
      speedElement.textContent = speed.toFixed(2);
    } else {
      speedElement.textContent = 'N/A';
    }
  }, handleGeolocationError, {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  });
}

function handleGeolocationError(error) {
  console.error(`Error(${error.code}): ${error.message}`);
}
