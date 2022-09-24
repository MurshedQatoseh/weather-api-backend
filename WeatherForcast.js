class ForecastWeatherData {
  constructor (day) {
    this.date = day.valid_date
    this.description = day.weather.description
    this.low_temp = day.low_temp
    this.max_temp = day.max_temp
    console.log(day)
  }
  
}

module.exports = ForecastWeatherData
