import { useState } from 'react'
import './App.css'
import React from 'react';
import CountryCard from './CountryFetchCard.jsx';
import CountriesContext from './context/context.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1>GeoSphere</h1>
        <form action="">
        <input type="text"  placeholder='Search a Country '/>
        <button>Go!</button>
        </form>

        <form >
        <label >Choose a Continent: </label>
          <select>
            <option >North America </option>
            <option >South America</option>
            <option >Europe</option>
            <option >Africa</option>
            <option >Asia</option>
          </select>
        <input type="submit"/>
        </form>

        <button>Dark Mode </button>
      </nav>
      <CountryCard />
    </>
  )
}

export default App
