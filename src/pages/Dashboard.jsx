import { useState } from 'react'
import "./Dashboard.css";
import useFetcher from "../hooks/use-fetcher"
import TempContainer from '../components/TempContainer';

export default function Dashboard() {

    const [city, setCity] = useState("");
    const [ data, isLoading, setIsLoading ] = useFetcher(city);


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
                <input type="text" placeholder=" Enter City" onChange={updateText} value={city} />
                <button>search</button>
                <TempContainer isLoading={isLoading} data={data} />
                <TempContainer isLoading={isLoading} data={data} />
                <TempContainer isLoading={isLoading} data={data} />
                <TempContainer isLoading={isLoading} data={data} />
            </form>

        </div>


    )
}
