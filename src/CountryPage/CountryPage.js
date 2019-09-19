import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAME_NORMALIZATION_DICTIONARY } from '../Common/Constants';
import styled from 'styled-components';
import MainCard from './Cards/MainCard';
import StatisticsCard from './Cards/StatisticsCard';
import CodesCard from './Cards/CodesCard';
import WeatherApiCard from './Cards/WeatherApiCard';
import TwitterApiCard from './Cards/TwitterApiCard';
import LanguagesCard from './Cards/LanguagesCard';
import LanguageAccordionCard from './Cards/LanguageAccordionCard';
import CurrencyAccordionCard from './Cards/CurrencyAccordionCard';
import RegionalBlocAccordionCard from './Cards/RegionalBlocAccordionCard';
import AlternativeSpellingsCard from './Cards/AlternativeSpellingsCard';
import NeighboursCard from './Cards/NeighboursCard';

const widthChange = "750px";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1080px;
  margin: 0;

  * {
    cursor: default;
  }

  a {
    cursor: pointer;
  }

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

  const normalizeName = (country, dictionary) => {
    for (let entry of dictionary) {
      if (entry[0] === country.name) {
        return Object.assign({}, country, {name: entry[1]});
      }
    }
    return country;
  }

  useEffect(() => {
    async function getCountryData(){
      const resp = await fetch(
        // process.env.REACT_APP_MOCK_URL ? 
        // `${process.env.REACT_APP_MOCK_URL}/rest/v2/alpha/${match.params.alpha3Code}` : 
        `https://restcountries.eu/rest/v2/alpha/${match.params.alpha3Code}`
      );
      const data = await resp.json();
      return data;
    }

    getCountryData().then((country) => {
      setCountry(normalizeName(country, NAME_NORMALIZATION_DICTIONARY));
    }).catch((er) => {
      console.log(er.response);
    })
  }, [match.params.alpha3Code])

  return (country && country.name) ? (
    <>
      <Link to="/countrycraze">Back</Link>
      <Div>
        <Column>
          <MainCard country={country}/>
          <AlternativeSpellingsCard country={country}/>
          <NeighboursCard country={country}/>
          <StatisticsCard country={country}/>
          <CodesCard country={country}/>
        </Column>
        <Column>
          <LanguageAccordionCard country={country}/>
          <CurrencyAccordionCard country={country}/>
          <RegionalBlocAccordionCard country={country}/>
          <LanguagesCard country={country}/>
        </Column>
        <Column>
          <Flag src={country.flag}/>  
          {/* <WeatherApiCard/>
          <TwitterApiCard/> */}
        </Column>
      </Div>
    </>
  ) : null;
}

export default CountryPage
