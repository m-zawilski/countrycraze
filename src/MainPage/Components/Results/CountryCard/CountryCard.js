import React from "react"
import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
import { REGION_COLORS } from "../../../../Common/Constants";

const Card = styled.div`
  width: 220px;
  height: 300px;
  text-align: center;
  color: #fff;
  background: radial-gradient(#111, #333 125%);
  border-radius: 8px;
  border: 2px solid ${props => REGION_COLORS[props.region]};
  margin: 10px;
  transition-duration: .4s;
  z-index: 0;

  p {
    margin: 5px;
  }

  &:hover {
    background: radial-gradient(#000, #333 125%);
    transform: translateY(-5px);
  }
`

const Flag = styled.img`
  width: 60px;
  height: 40px;
`

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 26%;
  border-radius: 8px 8px 0 0;
  h2, p {
    margin: 0;
  }
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`

const Underline = styled.div`
margin: 0;
  height: 8%;
  background: linear-gradient(
    70deg,
    ${props => darken(.12, REGION_COLORS[props.region])} 0%, 
    ${props => REGION_COLORS[props.region]} 80%,
    ${props => darken(.12, REGION_COLORS[props.region])} 100%
  );
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  text-align: left;
  .name {
    font-weight: 600;
    font-size: ${props => props.mainLength < 20 ? "1.1em" : `${1.1 - props.mainLength*0.008}em`}};
  }
  .native-name {
    font-size: ${props => props.secondaryLength < 20 ? ".8em" : `${.8 - props.secondaryLength*0.004}em`};
  }
`

const BodyDiv = styled.div`
  display: flex;
  height: 66%;
  flex-direction: column;
  justify-content: center;
`

const putCommas = (bigNumber) => {
  let numberWithCommas = "";
  const digits = String(bigNumber);
  if(digits.includes(".")) { return digits; }
  for(let i = digits.length - 1; i >= 0; i--){
    numberWithCommas += digits[i];
    if((digits.length-i) % 3 === 0 && i !== 0){
      numberWithCommas += ",";
    }
  }
  return numberWithCommas.split("").reverse().join("");
}

function CountryCard(props) {
  const { country } = props;
  return (
    <Card region={country.region}>
      <Link 
        to={`/countrycraze/country/${country.alpha3Code}`} 
        style={{ color: 'inherit', textDecoration: 'inherit'}
      }>
        <HeaderDiv>
          <TitleDiv
              mainLength={country.name.length}
              secondaryLength={country.nativeName.length}
          >
            <h2 className="name">{country.name}</h2>
            <p className="native-name">{country.nativeName}</p>
          </TitleDiv>
          <Flag 
            src={country.flag} 
            alt={`${country.name} flag`
          }/>
        </HeaderDiv>
        <Underline region={country.region}/>
        <BodyDiv region={country.region}>
          <p><strong>Capital city:</strong> {country.capital ? country.capital : "-"}</p>
          <p><strong>Region:</strong> {country.region ? country.region : "-"}</p>
          <p><strong>Subregion:</strong> {country.subregion ? country.subregion : "-"}</p>
          <p><strong>Population:</strong> {country.population ? putCommas(country.population) : "0"}</p>
          {country.area ? <p><strong>Area:</strong>{` ${putCommas(country.area)} km²`}</p> : null}
        </BodyDiv>
      </Link>
    </Card>
  )
}

export default CountryCard
