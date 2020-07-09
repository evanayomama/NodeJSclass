const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/55a2036653849e084f2c3377c016dae6/' + latitude + ',' + longitude
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + '. The low today is ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain. The wind speed today is ' + body.currently.windSpeed + '.')
        }
        })
}
module.exports = forecast