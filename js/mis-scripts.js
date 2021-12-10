$(function(){

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
     },
    });
})

var mymap = L.map('mapid').setView([19.436529969922443, -99.14628536057083], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([19.436529969922443, -99.14628536057083]).addTo(mymap);

var circle = L.circle([19.436529969922443, -99.14628536057083], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(mymap);

marker.bindPopup("<b>El Club del Rock&Roll - Record Store</b><br>Calle Dr Mora 9-local 12, Colonia Centro, Barrio Alameda, Cuauhtémoc, 06050 Ciudad de México, CDMX").openPopup();
circle.bindPopup("Colonia Roma");

var map = L.map('map').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);




