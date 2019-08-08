import React from "react";
import "./CountriesCardsContainer.scss";

function CountriesCardsContainer(props) {
    return (
        <ul>
            {props.countries.map((country, i) => {
                return (
                    <li key={i}>
                        <p>{country.name}</p>
                        <p>{country.region}</p>
                        <p>{country.subregion}</p>
                        <p>{country.population}</p>
                        <p>{country.area} km2</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default CountriesCardsContainer;