import { useState, useEffect } from 'react'
import axios from 'axios';
import "./Dashboard.css";


export default function Dashboard() {
    const API_KEY = "ffc695ea854c696dd3892faba5f6b645";
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ temp: null, name: "" });


    const updateText = (evt) => {
        setCity(evt.target.value);
    }
    async function fetchWeather() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        setIsLoading(false);
        setCity("");
        console.log(response.data)
        setData(currData =>{
            return {
                temp : response.data.main.temp - 273.15, 
                name: response.data.name
            }
        });
    }
    useEffect(() => {
        if (isLoading) {
            fetchWeather();
        }
    }, [isLoading])
    const handleSearch = (event) => {
        setData(currData=>{
            return {
                ...currData,
                name: ""
            }
        });
        event.preventDefault();
        setIsLoading(true);
    }

    return (
        <div className="temp-container">
            <form onSubmit={(event) => handleSearch(event)} >
                <input type="text" placeholder=" Enter City" onChange={updateText} value={city} />
                <button>search</button>
                {isLoading && <p>Loading..</p>}
                {data.temp && <p className="temp-info">{data.name} temperature: {Math.floor(data.temp)} &#x2103;</p>}
            </form>

        </div>
    )
}
