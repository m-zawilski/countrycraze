import { useState, useEffect } from "react";
import { SOVEREIGN_STATES, NORMALIZE_NAMES_DICTIONARY } from "./Constants";

async function getCountries(){
    const resp = await fetch("https://restcountries.eu/rest/v2/all");
    let listOfCountries = await resp.json();
    listOfCountries = assignOfficiallyRecognized(listOfCountries);
    return normalizeNames(listOfCountries, NORMALIZE_NAMES_DICTIONARY);
}

function useFetch(url, defaultData) {
    const [ data, setData ] = useState(defaultData);

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(url);
            const json = await resp.json();
            setData(json);
        }
        fetchData();
    }, [url])

    return data;
}

function assignOfficiallyRecognized(listOfCountries) {
    const isOfficiallyRecognized = (country) => {
        const officiallyRecognizedStates = SOVEREIGN_STATES;
        return officiallyRecognizedStates.includes(country.name);
    }

    return listOfCountries.map((country) => {
        if(isOfficiallyRecognized(country)){
            return Object.assign({}, country, {sovereign: true});
        } else return Object.assign({}, country, {sovereign: false});
    })
}

function normalizeNames(listOfCountries, dictionary) {
    return listOfCountries.map((country) => {
        for (let entry of dictionary) {
            if (entry[0] === country.name) {
                return Object.assign({}, country, {name: entry[1]});
            }
        }
        return country;
    })
}

export {
    useFetch,
    getCountries
}