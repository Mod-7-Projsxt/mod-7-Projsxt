import React from 'react';
import { useState, useContext } from 'react';
import { Route,Routes } from 'react-router-dom';
import CountriesContext from './context/context';
import CountryCard from './CountryFetchCard';
import {FaSearch } from 'react-icons/fa'

function Navbar() {
  // Corrected function name and method call for preventDefault
  
    const { countriesData } = useContext(CountriesContext);
    const [searchTerm, setSearchTerm] = useState('');
  
    // Filter logic
    const filteredCountries = countriesData.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredCountries)
    
  
    return (

    <div>

  
      <div className='search-bar'>
        {/* <FaSearch id='search-log'/> */}
        <input 
        className='input'
          type="text" 
          placeholder="Search for a country..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
        />
        </div>
        {/* Pass the filteredCountries array to CountryCard */}
      <div className='cards'>  

        <CountryCard countries={filteredCountries} />

        </div>
        </div>

    );
  }

export default Navbar;







