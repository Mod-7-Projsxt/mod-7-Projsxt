import React, { useContext, useEffect, useState } from 'react';
import fetchFlagImages from './context/countriesProvider';
import CountriesContext from './context/context';


function FlagCard () {
    const flag = useContext(CountriesContext).flagData

    console.log(countriesData)

}
export default FlagCard