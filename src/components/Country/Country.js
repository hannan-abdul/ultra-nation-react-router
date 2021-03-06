import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, population, region, area} = props.country;
    const friendStyle ={
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <h5>Population: {population}</h5>
            <h5>Region: {region}</h5>
            <Link to={`/country/${area}`}>Country code: {area}</Link>
        </div>
    );
};

export default Country;