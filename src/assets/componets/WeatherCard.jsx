import React from 'react'

const WeatherCard = ({weather, temps,isCelsius,changeUnitTemp}) => {
  return (
    <section className='WeatherCard'>
        <h1 className="weatherCard-title">Weather App</h1>
        <h2 className='weatherCard-place'>{weather?.name}, {weather?.sys.country}</h2>
        <div className='weatherCard-img'>
            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />
        </div>
        <h3 className='weatherCard-temp'>{isCelsius ? temps?.celsius + "°C" : temps?.fahrenheit + "°F"} </h3>
        <ul className='weatherCard-list'>
            <li className='weatherCard-description'>{weather?.weather[0].main}, {weather?.weather[0].description} </li>
            <li><span>Wind Speed</span> {weather?.wind.speed} m/seg</li>
            <li><span>Clouds</span> {weather?.clouds.all}%</li>
            <li><span>Pressure</span> {weather?.main.pressure} hPa</li>
        </ul>
        <button className='weatherCard-btn' onClick={changeUnitTemp}>°C / °F</button>

    </section>
  )
}

export default WeatherCard