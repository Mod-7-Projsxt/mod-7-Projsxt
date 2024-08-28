import React, { useContext, useEffect, useState } from 'react';
import handleFetch from './utils/fetch';
import CountryProvider from './context/countriesProvider';
import CountriesContext from './context/context';
import FlagCard from './FlagFetch';
import {Link} from 'react-router-dom'

function CountryCard({ countries }) {

  const countriesData = useContext(CountriesContext).countriesData
  const flags = useContext(CountriesContext).flagData



  
  return (
    <>
    <div className='country-cards'>

    <div title='click me' className="countries" href='{}'>
    {/* {flags.map(flag => (<img src={flag.flags.svg} alt=""/>))  } */}
      {countries?.sort((a, b) => a.name.common.localeCompare(b.name.common)) // Sorting the countries alphabetically
      .map(country => ( // if the countriesData is an array
        <div key={country.cca3} className="country">
          <img className='flag'src={country.flags.svg} alt="" />
          <h2 className='h2'>{country.name.common} {country.flag}</h2>
          <nav className='info'>
          <p>Capital: {country.capital ? country.capital[0] : 'DNE'}</p>
          <p>Region: {country.region}<span></span></p>
          {/* searched up how to seperate numbers in jsx */}
          <p>Population: {country.population.toLocaleString()}</p> 
          <p>Language(s): {country.languages ? Object.values(country.languages).join(', ') : 'N/A'} </p> 
          <p>Currency: {country.currencies ? Object.values(country.currencies)
          .map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'DNE'}</p>
          </nav>

              <a href={country.maps.googleMaps} className='mapLink'>
                View on Google Maps
              </a>
        </div>
      ))}
    </div>

    </div>

    </>
  );
}

export default CountryCard;

// is rendering the data onto the page

