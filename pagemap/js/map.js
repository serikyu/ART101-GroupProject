// This Leaflet map is based on the documentation provided by Brian Cheung
// Implemented for this project by Ren Buendia

// Set map view to UC Santa Cruz Campus
let myMap = L.map("map").setView([36.99, -122.06], 15);

// Use the Stadia OSM Bright tile layer (From https://leaflet-extras.github.io/leaflet-providers/preview/)
let Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

// Implement tile layer style
Stadia_OSMBright.addTo(myMap);

// On click, add marker
let userMarker; // define outside the click event

myMap.on('click', function(e) {
  let lat = e.latlng.lat.toFixed(4);
  let lng = e.latlng.lng.toFixed(4);

  // Remove old marker if it exists
  if (userMarker) {
    myMap.removeLayer(userMarker);
  }

  // Add new marker
  userMarker = L.marker([lat, lng])
    .addTo(myMap)
    .bindPopup(`Coordinates: (${lat}, ${lng})`)
    .openPopup();

  // Auto-fill the location field
  const locationInput = document.getElementById('location');
  if (locationInput) {
    locationInput.value = `Lat: ${lat}, Lng: ${lng}`;
  }
});

// About Slug!
document.addEventListener('DOMContentLoaded', function() {
  const image = document.querySelector('.hover-image');
  
  image.addEventListener('mouseover', function() {
    this.src = "./img/bentslug.PNG";
  });
  
  image.addEventListener('mouseout', function() {
    this.src = "./img/flatslug.PNG";
  });
});



//User Post Pop-Up
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const popupButton = document.getElementById('posterButton');
  const popupOverlay = document.getElementById('posterOverlay');
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


//Thanks for your submission pop-up!
document.getElementById('button').addEventListener('click', function() {
        // Close the current overlay
        document.getElementById('posterOverlay').style.display = 'none';
        
        // Show the congratulatory popup
        document.getElementById('thanksPopup').style.display = 'flex';
    });
    
    // Close buttons functionality
    document.querySelector('.thanks-content .close-btn').addEventListener('click', function() {
        document.getElementById('thanksOverlay').style.display = 'none';
    });
    
    function closeThanksPopup() {
        document.getElementById('thanksPopup').style.display = 'none';
    }

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
  });
});




