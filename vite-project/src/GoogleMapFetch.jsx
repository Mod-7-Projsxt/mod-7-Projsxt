function googleMapFetch() {

    const countriesData = useContext(CountriesContext).countriesData
    return (
      <div className="countries">
        {countriesData?.map(country => ( // if the countriesData is an array
          <div key={country.cca3} className="country">
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Language: {country.languages}</p>
            <p>Currency: {country.currencies}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default CountryCard;