document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateSpeed, handleGeolocationError, {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});

function updateSpeed(position) {
  const speedElement = document.getElementById('speed');

  if (position.coords.speed !== null) {
    const speed = position.coords.speed * 3.6; // Convert m/s to km/h
    speedElement.textContent = speed.toFixed(2);
  } else {
    speedElement.textContent = 'N/A';
  }
}

function handleGeolocationError(error) {
  console.error(`Error(${error.code}): ${error.message}`);
}
