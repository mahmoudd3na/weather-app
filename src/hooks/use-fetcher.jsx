// import { useState } from "react";
// export default useFetcher =()=>{
//     const API_KEY = "ffc695ea854c696dd3892faba5f6b645";
//     const [city, setCity] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState({ temp: null, name: "" });


//     const updateText = (evt) => {
//         setCity(evt.target.value);
//     }
//     async function fetchWeather() {
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//         setIsLoading(false);
//         setCity("");
//         console.log(response.data)
//         setData(currData =>{
//             return {
//                 temp : response.data.main.temp - 273.15, 
//                 name: response.data.name
//             }
//         });
//     }
//     useEffect(() => {
//         if (isLoading) {
//             fetchWeather();
//         }
//     }, [isLoading])
// }