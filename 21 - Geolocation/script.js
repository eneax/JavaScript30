const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`; // data.coords.heading --> it's the number of degrees relative north
}, (err) => {
  console.error(err);
  alert('Hey, please allow the geolocation!!!');
});