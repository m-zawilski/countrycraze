import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CountryPage({match}) {
  let [ country, setCountry ] = useState({});

  async function getCountryData(){
    const resp = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.apiName}`);
    const data = await resp.json();
    return data;
  }

  useEffect(() => {
    getCountryData().then((data) => {
      setCountry(data[0]);
    }
    ).catch((error) => {
      console.log(error);
      return <p>There was an error while downloading the data.</p>
    })
  }, [])

  return country ? (
    <div>
      <p>
        {country.name}
      </p>
      <p>
        {country.nativeName}
      </p>
      <p>
        {country.region}
      </p>
      <Link to="/">Back</Link>
    </div>
  ) : null;
}

export default CountryPage
