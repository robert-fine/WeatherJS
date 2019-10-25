class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.data.city_name;
    this.desc.textContent = weather.data.weather;
    this.string.textContent = weather.data.temp;
    // this.icon.setAttribute('src', )
    // this.humiditiy.textContent = `Relative Humidity: ${weather.data.rh}`;
    this.feelsLike.textContent = `Feels Like: ${weather.data.app_temp}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.data.dewpt}`;
    this.wind.textContent = `Wind: ${weather.wind_spd}`;
  }
}
