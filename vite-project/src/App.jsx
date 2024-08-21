import { useState } from 'react'
import './App.css'
import React from 'react';
import CountryCard from './CountryFetchCard.jsx';
import CountriesContext from './context/context.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>GeoSphere</h1>
      <CountryCard />
    </>
  )
}

export default App
