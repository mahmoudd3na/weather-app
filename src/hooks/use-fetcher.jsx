import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetcher(city) {
    const API_KEY = "ffc695ea854c696dd3892faba5f6b645";
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ temp: null, name: "" });

    async function fetchWeather() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        setIsLoading(false);
        setData(() => {
            return {
                temp: response.data.main.temp - 273.15,
                name: response.data.name
            }
        });
    }

    useEffect(() => {
        if (city.length !== 0) {
            setData(currData => {
                return {
                    ...currData,
                    name: ""
                }
            })
            fetchWeather();
        }
    }, [isLoading])

    return [
        data,
        isLoading,
        setIsLoading,
    ]
}