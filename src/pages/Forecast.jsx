import React from 'react'
import useFetcher from '../hooks/use-fetcher'
import { useState } from 'react';
import "./Forecast.css"

export default function Forecast() {
  const URL = "https://api.openweathermap.org/data/2.5/forecast?";
  const [city, setCity] = useState("");
  const [ data, isLoading, setIsLoading ] = useFetcher(city,URL);


  const updateText = (evt) => {
      setCity(evt.target.value)
  }

  const handleSearch = (event) => {
      event.preventDefault();
      setIsLoading(true);
  }
  return (
    <>
      <div className="temp-container">
      <h3>FIVE DAYS Forecast</h3>
        <form onSubmit={(event) => handleSearch(event)} >
          <input type="text" placeholder=" Enter City" onChange={updateText} value={city} />
          <button>search</button>
          {data.name && <h1>{data.name}:</h1>}
          <div className='date-container'>
          {data.temp && data.temp.map(day => {
            return <p className="date-temp">{day.date.slice(0,10)} ,<br/> temp: {Math.floor(day.temp)} &#x2103;</p>
          })}
          </div>
          
        </form>

      </div>
    </>
  )
}
