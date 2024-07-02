import {useState, useEffect} from "react";
import CountriesComponent from "../components/CountriesComponents";


const CountriesContainer = () => {

    const [countriesData, setCountriesData] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState([]);


    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountriesData(data);
    }

    const handleSelectCountry = (country) => {
        if (!selectedCountries.includes(country)) {
            setSelectedCountries([...selectedCountries, country]);
            onAddVisitedCountry(country);
        }
    };
    
    useEffect(() => {
        fetchCountries();
     }, []);

     return (
        <>
            <h2>Countries BucketList</h2>
            {countriesData ? (
                <CountriesComponent countriesData={countriesData} onSelectCountry={handleSelectCountry} />
            ) : (
                <p>Loading data...</p>
            )}
        </>
    );

}
export default CountriesContainer;