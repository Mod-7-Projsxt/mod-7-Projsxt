import { useState } from 'react'
import './App.css'
import React from 'react';
import CountryCard from './CountryFetchCard.jsx';
import CountriesContext from './context/context.jsx';
import Navbar  from './Filter.jsx';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs.jsx'



function App() {
  // const [count, setCount] = useState(0)
  const { countriesData } = useContext(CountriesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCountries = countriesData.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
  <>
  <nav className="navbar">
  <Link to="/" className="nav-logo">
  {/* <h1>GeoSphere</h1> */}
  <img src="/src/images/logo.jpg" alt="" className="logo" />
  </Link>
  </nav>
  <Navbar setSearchTerm={setSearchTerm}/>
  <Routes>
    <Route path='/' element={<CountryCard countries={filteredCountries}  searchTerm={searchTerm} filteredCountries={filteredCountries}/>} />
    <Route path='/About' element={<AboutUs/>}/>
  </Routes>
  </>
  )
};

export default App
