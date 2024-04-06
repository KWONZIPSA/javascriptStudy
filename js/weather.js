const API_KEY = "384eddb95ab6c97b71686294b4a16c3d";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `섭씨 ${Math.round(data.main.temp)}도`;
    }); //call url 당장 실행하는 건 아니고 서버의 응답을 기다려야해.
  console.log(`너의 위치는 ${lon}, ${lat}입니다.`);
}

function onGeoError() {
  alert("위치를 확인할 수 없지롱");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError); //현재 위치 wifi 등 얻기, 하나는 성공했을때, 하나는 실패했을때
