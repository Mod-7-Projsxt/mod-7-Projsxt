import { useState } from 'react'
import './App.css'
import React from 'react';
import CountryCard from './CountryFetchCard.jsx';
import CountriesContext from './context/context.jsx';
import Navbar  from './Filter.jsx';
import {Link} from 'react-router-dom'



function App() {
  // const [count, setCount] = useState(0)

 return (
  <>
  <nav className="navbar">
  <Link to="/" className="nav-logo">
  {/* <h1>GeoSphere</h1> */}
  <img src="/src/images/logo.jpg" alt="" className="logo" />
  </Link>
  </nav>
  <Navbar/>
 
  <CountryCard />
  </>
  )
};

export default App
