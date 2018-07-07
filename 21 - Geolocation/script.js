const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');

navigator.geolocation.watchPosition((data) => {
  console.log(data);

  latitude.textContent = parseFloat(data.coords.latitude).toFixed(7);
  longitude.textContent = parseFloat(data.coords.longitude).toFixed(7);
}, (err) => {
  console.error(err);
  alert('Hey, please allow the geolocation!!!');
});