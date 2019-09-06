import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAME_NORMALIZATION_DICTIONARY } from './Constants';
import styled from 'styled-components';

const widthChange = "750px";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1080px;
  margin: 0;

  @media (min-width: ${widthChange}) {
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    margin: 10px 0;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0;

  @media (min-width: ${widthChange}) {
    width: 30%;
    margin: 10px 0;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 1px 1px 2px #000;
  margin: 10px 0;
`

const Flag = styled.img`
  width: 100%;
  margin: 10px 0;
  order: 1;

  @media (min-width: ${widthChange}) {
    order: 0;
  }
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
      <Link to="/countrycraze">Back</Link>
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
            {Object.values(country.translations).map((el, i) => {
              return <p key={i}>{el}</p>
            })}
          </Card>
        </Column>
        <Column>
          <Flag src={country.flag}/>  
          <Card>
            Place for weather API Card
          </Card>
          <Card>
            Place for twitter API Card
          </Card>
        </Column>
      </Div>
    </>
  ) : null;
}

export default CountryPage
