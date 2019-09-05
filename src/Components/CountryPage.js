import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAME_NORMALIZATION_DICTIONARY } from './Constants';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 1px 1px 2px #000;
`

const Flag = styled.img`
  width: 200px;
`

function CountryPage({match}) {
  let [ country, setCountry ] = useState(null);

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
    <>
      <Div>
        <Column>
          <Card>
            <p>{country.name}</p>
            <p>{country.nativeName}</p>
            <p>{Object.values(country.altSpellings).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
            <p>{`${country.alpha2Code} ${country.alpha3Code} ${country.cioc} ${country.numericCode}`}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.capital}</p>
            <p>{Object.values(country.borders).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
          </Card>
          <Card>
            <p>{country.area}</p>
            <p>{country.population}</p>
            <p>{(country.population/country.area).toFixed(2)}</p>
          </Card>
          <Card>
            <p>{country.demonym}</p>
            <p>{Object.values(country.topLevelDomain).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
            <p>{Object.values(country.callingCodes).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
            <p>{Object.values(country.timezones).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
          </Card>
        </Column>
        <Column>
          <Card>
            <p>{Object.values(country.regionalBlocs).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
            <p>{Object.values(country.currencies).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
            <p>{Object.values(country.languages).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}</p>
          </Card>
          <Card>
            {Object.values(country.translations).map((el) => {
              return <p>{el}</p>
            })}
          </Card>
        </Column>
        <Column>
          <Flag src={country.flag}/>      
        </Column>
      </Div>
      <Link to="/countrycraze">Back</Link>
    </>
  ) : null;
}

export default CountryPage
