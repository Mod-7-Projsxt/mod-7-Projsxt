import { useState, useEffect } from "react";

function americas() {
  const [region, setReg] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    const fetchReg = async () => {
      const [data, error] = await fetchData('https://restcountries.com/v3.1/region/americas');
      if (data) setReg(data);
      if (error) setError(error);
    };
    doFetch();
  }, []);


}