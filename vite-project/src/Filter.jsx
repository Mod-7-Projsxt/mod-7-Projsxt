import React from 'react';
import { useState, useContext } from 'react';
import { Route,Routes } from 'react-router-dom';
import CountriesContext from './context/context';
import CountryCard from './CountryFetchCard';

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
        <input 
          type="text" 
          placeholder="Search Country Name..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
        />
        
        {/* Pass the filteredCountries array to CountryCard */}
        <CountryCard countries={filteredCountries} />
      </div>
    );
  }

export default Navbar;







