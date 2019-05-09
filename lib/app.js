import mapboxgl from 'mapbox-gl';

const myKey = "pk.eyJ1IjoidG9ta2YiLCJhIjoiY2p2OGVuMWxuMDJxYjQ0czFiZW9vbmJ0diJ9.ltMrtJDrZhoykdDfLajCsQ";

const inputButton = document.querySelector("#button")

inputButton.addEventListener('click', (event) => {
  event.preventDefault()
  const insertArea = document.querySelector('.list');
  const text = document.querySelector('#text').value;
  const query = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${myKey}`;
  fetch(query)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
  const gpsArray = data.features[0].center;
  insertArea.innerHTML = ""
  gpsArray.forEach((item) => {
    const HTMLitem = `<li>${item}</li>`;
    insertArea.insertAdjacentHTML("beforeend", HTMLitem);
mapboxgl.accessToken = myKey;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: gpsArray,
  zoom: 12
});


new mapboxgl.Marker()
  .setLngLat(gpsArray)
  .addTo(map);
    })
    });

  });
