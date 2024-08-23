import React, { useContext, useEffect, useState } from 'react';
import handleFetch from './utils/fetch';
import CountryProvider from './context/countriesProvider';
import CountriesContext from './context/context';
import FlagCard from './FlagFetch';
import {Link} from 'react-router-dom'

function CountryCard() {

  const countriesData = useContext(CountriesContext).countriesData
  const flags = useContext(CountriesContext).flagData



  
  return (
    <>
    <div>
    
    </div>
    <div title='click me' className="countries" href='{}'>
    {/* {flags.map(flag => (<img src={flag.flags.svg} alt=""/>))  } */}
      {countriesData?.map(country => ( // if the countriesData is an array
        <div key={country.index} className="country">
          <h2>{country.name.common} {country.flag}</h2>
          <img src={country.flags.svg} alt="" />
          <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          <p>Region: {country.region}<span></span></p>
          <p>Population: {country.population}</p>
          <p>Language(s): {country.languages ? Object.values(country.languages).join(', ') : 'N/A'} </p>
          <p>
              <a
                href={country.maps.googleMaps}
              >
                View on Google Maps
              </a>
            </p>
          <p>Currency: {country.currencies ? Object.values(country.currencies)
          
          .map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}</p>
    
        </div>
      ))}
      
    </div>

    </>
  );
}

export default CountryCard;

// is rendering the data onto the page

