import React, { Children, useEffect, useState } from 'react';
import handleFetch from '../utils/fetch';
import CountriesContext from './context';

function CountryProvider( { children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [flagData, setFlagData] = useState([])
  const [mapData, setMapData] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
        const [data, error] = await handleFetch('https://restcountries.com/v3.1/all');
      if (data){
        setCountriesData(data)
        console.log(data)
      }
        console.log(data)
      if(error){
        setError(error);
      }
    };

    const fetchFlagImages = async () => {
      const [data, error] = await handleFetch('https://restcountries.com/v3.1/all?fields=flags');
    if (data){
      setFlagData(data)
    }
      console.log(data)
    if(error){
      setError(error);
    }
  };

  const fetchGoogleMaps = async () => {
    const [data, error] = await handleFetch('https://restcountries.com/v3.1/all?fields=maps');
  if (data){
    setMapData(data)
  }
    console.log(data)
  if(error){
    setError(error);
  }
};

    // console.log(countriesData)
    fetchCountries();
    fetchFlagImages();
    fetchGoogleMaps();
  }, []);

// anytime we want to use these values look in the CountriesProvider file
  let contextValues = {
    countriesData,
    setCountriesData,
    flagData,
    setFlagData,
    mapData,
    setFlagData

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