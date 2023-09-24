import React from 'react'
import "./TempContainer.css"

export default function TempContainer({isLoading, data}) {
    return (
        <>
            {isLoading ? <p>Loading..</p> : data.temp && <p className="temp-info">{data.name} temperature: {Math.floor(data.temp)} &#x2103;</p>}

        </>

    )
}
