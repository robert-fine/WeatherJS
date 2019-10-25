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
    this.location.textContent = weather.data[0].city_name;
    this.desc.textContent = weather.data[0].weather.description;
    this.string.textContent = `${weather.data[0].temp} F`;
    this.icon.setAttribute(
      'src',
      `https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.data[0].rh}`;
    this.feelsLike.textContent = `Feels Like: ${weather.data[0].app_temp}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.data[0].dewpt}`;
    this.wind.textContent = `Windspeed: ${weather.data[0].wind_spd} MPH from the ${weather.data[0].wind_cdir}`;
  }
}
