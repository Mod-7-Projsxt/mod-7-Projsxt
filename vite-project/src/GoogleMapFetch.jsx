import React, { useContext, useEffect, useState } from 'react';
import handleFetch from './utils/fetch';
import fetchFlagImages from './context/countriesProvider';
import CountriesContext from './context/context';


function googleMapFetch() {

    const flagData = useContext(CountriesContext).countriesData
    return (
      <div className="countries">
        {countriesData?.map(country => (
          <div className="maps">
            <h2>{}</h2>
          </div>
        ))}
      </div>
    );
  }
  
  export default googleMapFetch;