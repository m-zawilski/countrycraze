import { SOVEREIGN_STATES, NORMALIZE_NAMES_DICTIONARY } from "./Constants";

async function getInitialData(){
    const resp = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await resp.json();
    let listOfCountries = assignOfficiallyRecognized(data);
    listOfCountries = normalizeNames(listOfCountries, NORMALIZE_NAMES_DICTIONARY);
    let regionsMapping = getHierarchyObject(listOfCountries, "region", ["subregion"]);
    return {
        countries: listOfCountries,
        regionsMapping: regionsMapping
    }
}

const getHierarchyObject = (listOfCountries, mainKey, otherKeys) => {
    let mainValues = {};
    listOfCountries.map((country) => {
        if(!Object.keys(mainValues).includes(country[mainKey])){
            mainValues = Object.assign({}, mainValues, {[country[mainKey]]: {}})
        }
        return null;
    })
    Object.keys(mainValues).map((mainValue) => {
        otherKeys.map((otherKey) => {
            if(!Object.keys(mainValues).includes(otherKey)){
                mainValues[mainValue] = Object.assign({}, mainValues[mainValue], {[otherKey]: []})
            }
            return null;
        })
        return null;
    })
    listOfCountries.map((country) => {
        Object.keys(mainValues).map((mainValue) => {
            if(mainValue === country[mainKey]){
                otherKeys.map((otherKey) => {
                    if(!mainValues[mainValue][otherKey].includes(country[otherKey])){
                        mainValues[mainValue][otherKey].push(country[otherKey]);
                    }
                    return null;
                })
            }
            return null;
        })
        return null;
    })
    return mainValues;
}

const assignOfficiallyRecognized = (listOfCountries) => {
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

const normalizeNames = (listOfCountries, dictionary) => {
    return listOfCountries.map((country) => {
        for (let entry of dictionary) {
            if (entry[0] === country.name) {
                return Object.assign({}, country, {name: entry[1]});
            }
        }
        return country;
    })
}


export default getInitialData;