import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName} = useParams();
    console.log(countryName)
    const [country, setCountry] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch (url)
        .then (res => res.json())
        .then (data => setCountry(data[0]))
    },[])

    return (
        <div>
            <h2>this is country detail: {countryName}</h2>
            <p>{country.population}</p>
        </div>
    );
};

export default CountryDetail;