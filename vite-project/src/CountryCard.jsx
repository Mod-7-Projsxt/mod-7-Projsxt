import React, { useEffect, useState } from 'react';

function CountryCard() {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
  })
}

export default CountryCard;
