
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './assets/componets/Loader'
import WeatherCard from './assets/componets/WeatherCard'

const Api_key = "a6e7339fd58efa281626dbf65e1b114a"

function App() {
  const [Coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [temps, setTemps] = useState()
  const [isCelsius, setIsCelsius] = useState(true)

  const success = (e) => {
    const newCoords = {
      lat: e.coords.latitude,
     long: e.coords.longitude
    }
    setCoords(newCoords)
    
  }
  const changeUnitTemp = () => setIsCelsius(!isCelsius)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
    
  }, [])

  useEffect (() =>{
    if (Coords) {
      
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${Coords.lat}&lon=${Coords.long}&appid=${Api_key}`
      axios.get(URL)
      .then(res => {
        setTimeout(() => {

          setweather(res.data)
         const celsius = (res.data.main.temp - 273.15).toFixed(2);
         const fahrenheit = (celsius * (9/5) + 32).toFixed(2);
         const newTemps = {
          celsius,
          fahrenheit 
         }
         setTemps(newTemps)
        }, 1000)
      })
      .catch(err => console.log(err))
    }

  },[Coords])
  

  return (
    <div className="App">
        {
          weather ? (
          <WeatherCard weather={weather}
          temps={temps}
           isCelsius={isCelsius}
           changeUnitTemp={changeUnitTemp} />) : <Loader />
        }
    </div>
  )
}

export default App
