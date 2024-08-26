import { useState } from 'react'
import './App.css'
import React from 'react';
import CountryCard from './CountryFetchCard.jsx';
import CountriesContext from './context/context.jsx';
import Navbar  from './Filter.jsx';



function App() {
  // const [count, setCount] = useState(0)

 return (
    <>
    
      <Navbar/>
      <CountryCard />
    </>
  )
};

export default App
