// https://api.weatherbit.io/v2.0/current?postal_code=70529&units=I&key=4fd032e51620498195e88bf4f4e9e0fc'

class Weather {
  constructor(zip) {
    this.apiKey = '4fd032e51620498195e88bf4f4e9e0fc';
    this.zip = zip;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?postal_code=${this.zip}&units=I&key=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(zip) {
    this.zip = zip;
  }
}
