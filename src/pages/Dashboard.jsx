import { useState } from 'react'
import "./Dashboard.css";
import useFetcher from "../hooks/use-fetcher"
import TempContainer from '../components/TempContainer';

export default function Dashboard() {
    const URL = "https://api.openweathermap.org/data/2.5/weather?"; 
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
        <div className="temp-container">
            <form onSubmit={(event) => handleSearch(event)} >
                <h1>Dashboard</h1>
                <input type="text" placeholder=" Enter City" onChange={updateText} value={city} />
                <button>search</button>
                <TempContainer isLoading={isLoading} data={data} />
            </form>

        </div>


    )
}
