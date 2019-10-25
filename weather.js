// https://api.weatherbit.io/v2.0/current?city=lafayette,LA&units=I&key=4fd032e51620498195e88bf4f4e9e0fc

class Weather {
  constructor(city, state) {
    this.apiKey = '4fd032e51620498195e88bf4f4e9e0fc';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&units=I&key=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
