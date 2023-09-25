import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetcher(city, URL) {
    const API_KEY = "ffc695ea854c696dd3892faba5f6b645";
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ temp: null, name: "" });
    async function fetchWeather() {
        try {
            const response = await axios.get(`${URL}q=${city}&appid=${API_KEY}`);
            setIsLoading(false);
            if(response ===null){
                throw new Error("Request or Response are not valid")
            }
            setIsLoading(false);
            if (response.data.main) { // in case the url was from the dashboard or favorites
                setData(() => {
                    return {
                        temp: response.data.main.temp - 273.15,
                        name: response.data.name
                    }
                });

            }
            if (response.data.list) {   //in case the url was from the forecast 
                setData(() => {
                    return {
                        temp: fiveDaysWeather(response.data.list),
                        name: response.data.city.name
                    }
                });
            }
            else throw new Error ("Wrong URL"); 

        }
        catch (error) {
            console.error("An error occurred:", error);
            setIsLoading(false);
            throw error; 
        }
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

    const fiveDaysWeather = (list) => {  //this function is used to fetch the five days temperature
        const fiveDaysTemp = [];
        let count = 0;
        for (let i = 0; i < list.length; i += 8) {  //we increment 8 because the api returns weather every 3 hours so 24 / 3 hours is 8 
            fiveDaysTemp[count] = {
                temp: list[i].main.temp - 273.15,
                date: list[i].dt_txt,
            }
            count++;
        }

        return fiveDaysTemp;
    }

    return [
        data,
        isLoading,
        setIsLoading,
    ]
}