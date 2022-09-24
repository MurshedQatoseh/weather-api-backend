'use strict'
require('dotenv').config()
const express = require('express') // import exporess framework
const server = express()
const cors = require('cors')
let axios=require("axios")


//http://localhost:3007/weather?q=cityname
server.use(cors()) // make any app to send a require

const PORT = process.env.PORT
let getWeatherHandler= async (req,res)=>{

  let name = req.query.q
console.log(name)
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1eb374c79308057acacd5eab6118cfc5`
 let result=await axios.get(url)
  try {
    let data=result.data
    let Data= new Weather(data)   
    res.send(Data)
  } catch (error) {
    
  }
}

server.get('/weather', getWeatherHandler)

class Weather {
  constructor(data){
  this.weather=data.weather[0].description
  this.minTemp=data.main.temp_min
  this.maxTemp=data.main.temp_max
}}


  



server.get('/', (req, res) => {
  res.send('hi from the home route')
})

server.get('*', (req, res) => {
  res.send('there No route in this path')
})

server.listen(PORT, () => {
  console.log(`${PORT} is run`)
})
