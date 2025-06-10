
//Slugs will be submitted within this .js file

// This Leaflet map is based on the documentation provided by Brian Cheung
// Implemented for this project by Ren Buendia

// Set map view to UC Santa Cruz Campus
let myMap = L.map("map").setView([36.995, -122.06], 14.55);


// Implement tile layer style
let OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  OSM.addTo(myMap);
  

// On click, add marker
let userMarker;

// Clicking on the map get the coords of that location
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

//------------------------------------------------------------------------------------------------------------------------
// Slugs manually loaded from Google Submissions - Alexander Adams
// Naming convention should be slug's name - submitter - date (should have no spaces + all lowercase for consistency).
// for example: "james-devin-2.20.2025"
// These images will go in the "slugimg" folder.
// If images hold location data, (36° 59' 22.55" N, 122° 4' 18.98" W)
// convert to Decimal Degrees format (Latitude: 36.9895972 | Longitude: -122.0719389)
// Use Lat and Long for Leaflet formatting.


//Slug #1:
// James - Submitted by Devin - 2/20/25

L.marker([36.9895972, -122.0719389])
    .addTo(myMap)
    .bindPopup(`
        <div>
            <h3>James</h3>
            <img src="../slugimg/james-devin-2.20.25.jpg" style=  "width: 200px;">
            <p>"Found this banana slug while going on a walk! - Devin<p>
            <p>Coordinates: (36.9896, -122.0719) @ 2/20/2025</p>
        </div>
    `);

//Slug #2:
// Samsung - Submitted by Adrian - 1/4/25

  L.marker([36.9985278, -122.0561056])
    .addTo(myMap)
    .bindPopup(`
        <div>
            <h3>Samsung</h3>
            <img src="../slugimg/samsung-adrian-1.4.25.jpg" style=  "width: 200px;">
            <p>"Found this banana slug while going on a walk! - Adrian<p>
            <p>Coordinates: (36.9985278, -122.0561056) @ 1/4/2025</p>
        </div>
    `);















//------------------------------------------------------------------------------------------------------------------------



// About Slug!
document.addEventListener('DOMContentLoaded', function() {
  const image1 = document.querySelector('.longslug-hover-image');
  
  image1.addEventListener('mouseover', function() {
    this.src = "../img/bentslug.PNG";
  });
  
  image1.addEventListener('mouseout', function() {
    this.src = "../img/flatslug.PNG";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const image2 = document.querySelector('.aboutslug-hover-image');
  
  image2.addEventListener('mouseover', function() {
    this.src = "../img/aboutslug2.PNG";
  });
  
  image2.addEventListener('mouseout', function() {
    this.src = "../img/aboutslug1.PNG";
  });
});

//-----------------------------------------------------------------------------------------------------
//Currently Obsolete
//User Post Pop-Up
//document.addEventListener('DOMContentLoaded', function() {
  // Get elements
//  const popupButton = document.getElementById('posterButton');
//  const popupOverlay = document.getElementById('posterOverlay');
//  const closeButton = document.querySelector('.close-btn');
//  const actionButton = document.querySelector('.action-btn');
  
  // Open popup
//  popupButton.addEventListener('click', function() {
//    popupOverlay.style.display = 'block';
//    setTimeout(() => {
//      popupOverlay.classList.add('active');
//    }, 10);
//  });
  
  // Close popup
//  closeButton.addEventListener('click', function() {
//    popupOverlay.style.display = 'none';
//  });
  
  // Close when clicking outside content
//  popupOverlay.addEventListener('click', function(e) {
//    if (e.target === popupOverlay) {
//      popupOverlay.style.display = 'none';
//    }
//  });
  
  // Action button example
//  actionButton.addEventListener('click', function() {
//    alert('Button clicked!');
//    // Add your interactive functionality here
//  });
//});




//Thanks for your submission pop-up! Currently Obsolete
//document.getElementById('button').addEventListener('click', function() {
//        // Close the current overlay
//        document.getElementById('posterOverlay').style.display = 'none';
        
//        // Show the congratulatory popup
//        document.getElementById('thanksPopup').style.display = 'flex';
//    });
    
    // Close buttons functionality
//    document.querySelector('.thanks-content .close-btn').addEventListener('click', function() {
//        document.getElementById('thanksOverlay').style.display = 'none';
//    });
    
//    function closeThanksPopup() {
//        document.getElementById('thanksPopup').style.display = 'none';
//    }
//-----------------------------------------------------------------------------------------------------


    
//Tables of Contents Button//
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const popupButton = document.getElementById('popupButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const closeButton = document.querySelector('.close-btn');
    
    // Open popup
    popupButton.addEventListener('click', function() {
        popupOverlay.style.display = 'block';
        setTimeout(() => {
            popupOverlay.classList.add('active');
        }, 10);
    });
    
// Close the current overlay
        document.getElementById('popupOverlay').style.display = 'none';
    // Close buttons functionality
    document.querySelector('.popup-content .close-btn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
    });
    
    // Close when clicking outside content
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 300);
        }
    });
});


function closePopupOverlay() {
  document.getElementById('popupOverlay').style.display = 'none';
}
