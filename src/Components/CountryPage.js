import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAME_NORMALIZATION_DICTIONARY, SOVEREIGN_STATES } from './Constants';

function CountryPage({match}) {
  let [ country, setCountry ] = useState({});

  async function getCountryData(){
    const resp = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.apiName}`);
    const data = await resp.json();
    return data.reduce((neededCountry, country) => {
      if(country.name === match.params.apiName){
        return country;
      } else {
        return neededCountry;
      }
    }, "");
  }

  const normalizeName = (country, dictionary) => {
    for (let entry of dictionary) {
      if (entry[0] === country.name) {
        return Object.assign({}, country, {name: entry[1]});
      }
    }
    return country;
  }

  useEffect(() => {
    getCountryData().then((country) => {
      setCountry(normalizeName(country, NAME_NORMALIZATION_DICTIONARY));
    }
    ).catch((error) => {
      console.log(error);
      return <p>There was an error while downloading the data.</p>
    })
  }, [getCountryData])

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
      <Link to="/countrycraze">Back</Link>
    </div>
  ) : null;
}

export default CountryPage
