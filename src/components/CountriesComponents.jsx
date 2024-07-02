import React from 'react';

const CountriesComponent = ({ countriesData, onSelectCountry }) => {
    return (
        <div>
            <h3>Countries</h3>
            {countriesData.map((country, index) => (
                <div key={index}>
                    <p>{country.name.common}</p>
                    <button onClick={() => onSelectCountry(country)}>Visited</button>
                </div>
            ))}
        </div>
    );
}


export default CountriesComponent;