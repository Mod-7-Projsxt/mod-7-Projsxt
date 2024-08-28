import React, { useEffect, useState } from 'react';
import handleFetch from '../utils/fetch';
import CountriesContext from './context';

function CountryProvider( { children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchCountries = async () => {
   
        const [data, error] = await handleFetch('https://restcountries.com/v3.1/all');
      if (data){
        setCountriesData(data)
      }
        console.log(data)
      if(error){
        setError(error);
      }

    };

    // console.log(countriesData)
    fetchCountries();
  }, []);

// anytime we want to use these values look in the CountriesProvider file
  let contextValues = {
    countriesData,
    setCountriesData
}

return (
    <CountriesContext.Provider  // using the datas from above
    value={contextValues}>
        {children}
    </CountriesContext.Provider>
)

// this is setting the countries context


}



export default CountryProvider