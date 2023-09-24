import React from 'react'
import useFetcher from '../hooks/use-fetcher'
import TempContainer from '../components/TempContainer';
import "./Dashboard.css"

export default function Favorites() {
  const cities = ["Berlin", "Amsterdam", "Jerusalem", "Beirut"]
  const [data1, isLoading1, setIsLoading1] = useFetcher(cities[0]);
  const [data2, isLoading2, setIsLoading2] = useFetcher(cities[1]);
  const [data3, isLoading3, setIsLoading3] = useFetcher(cities[2]);
  const [data4, isLoading4, setIsLoading4] = useFetcher(cities[3]);


  return (
    <div className='temp-container'>
      <TempContainer isLoading={isLoading1} data={data1} />
      <TempContainer isLoading={isLoading2} data={data2} />
      <TempContainer isLoading={isLoading3} data={data3} />
      <TempContainer isLoading={isLoading4} data={data4} />
    </div>
  )
}
