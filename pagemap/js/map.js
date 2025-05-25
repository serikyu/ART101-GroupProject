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

// need backend to add to buttons :(

// button to add slug should use marker, check leaflet documentation