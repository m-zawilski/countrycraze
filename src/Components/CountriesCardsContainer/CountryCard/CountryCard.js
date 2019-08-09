import React from 'react'
import styled from "styled-components";

const Card = styled.div`
  width: 220px;
  height: 300px;
  text-align: center;
  border: 1px solid #000;
  margin: 10px 0;
`

const Flag = styled.img`
  width: 60px;
  height: 40px;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  background: green;
  padding: 10px;
  justify-content: center;
  h2, p {
    margin: 0;
    font-size: 1em;
  }
  .name {
    font-weight: 600;
  }
  .native-name {
    font-size: .75em;
  }
`

const CardTitle = styled.div`
  display: flex;
  height: 100%;
`

const putCommas = (bigNumber) => {
  let numberWithCommas = "";
  const digits = String(bigNumber);
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
    <Card>
      <CardHeader>
        <h2 className="name">{country.name}</h2>
        <p className="native-name">{country.nativeName}</p>
      </CardHeader>
      <p>{country.capital ? country.capital : "None"}</p>
      <p>{country.region ? country.region : "None"}</p>
      <p>{country.subregion ? country.subregion : "None"}</p>
      <p>{country.population ? putCommas(country.population) : "0"}</p>
      <p>{country.area ? putCommas(country.area) : "<1"} km²</p>
        <Flag 
          src={country.flag} 
          alt={`${country.name} flag`
        }/>
    </Card>
  )
}

export default CountryCard
