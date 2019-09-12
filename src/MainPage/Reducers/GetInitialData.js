import { SOVEREIGN_STATES, NAME_NORMALIZATION_DICTIONARY } from "../../Common/Constants";

async function getInitialData(){
  const resp = await fetch(
    process.env.REACT_APP_MOCK_URL ? 
    `${process.env.REACT_APP_MOCK_URL}/rest/v2/all` : 
    `https://restcountries.eu/rest/v2/all`
  );
  const data = await resp.json();
  let listOfCountries = assignOfficiallyRecognized(data);
  listOfCountries = normalizeNames(listOfCountries, NAME_NORMALIZATION_DICTIONARY);
  let regionsMapping = getMapping(listOfCountries, "region", ["subregion"]);
  return {
    countries: listOfCountries,
    regionsMapping: regionsMapping
  }
}

// Accepts a list of objects, main key of those objects and an array of other keys.
// Returns object, where each key is one value from values in main key.
// These keys map objects, which have arrays of possible values from other keys.
const getMapping = (listOfCountries, mainKey, otherKeys) => {
  let mainValues = assignKeysFromMainKeyValues(listOfCountries, mainKey);
  mainValues = assignKeysFromOtherKeysValues(mainValues, otherKeys);
  mainValues = fillOtherKeysWithPossibleValues(mainValues, listOfCountries, mainKey, otherKeys);
  return mainValues;
}

const assignKeysFromMainKeyValues = (listOfCountries, mainKey) => {
  let mainValues = {};
  for(let country of listOfCountries){
    if(!Object.keys(mainValues).includes(country[mainKey])){
      mainValues = Object.assign({}, mainValues, {[country[mainKey]]: {}})
    }
  }
  return mainValues;
}

const assignKeysFromOtherKeysValues = (mainValues, otherKeys) => {
  for(let mainValue of Object.keys(mainValues)){
    for(let otherKey of otherKeys){
      if(!Object.keys(mainValues).includes(otherKey)){
        mainValues[mainValue] = Object.assign({}, mainValues[mainValue], {[otherKey]: []})
      }
    }
  }
  return mainValues;
}

const fillOtherKeysWithPossibleValues = (mainValues, listOfCountries, mainKey, otherKeys) => {
  for(let country of listOfCountries){
    for(let mainValue of Object.keys(mainValues)){
      if(mainValue === country[mainKey]){
        for(let otherKey of otherKeys){
          if(!mainValues[mainValue][otherKey].includes(country[otherKey])){
              mainValues[mainValue][otherKey].push(country[otherKey]);
          }
        }
      }
    }
  }
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
    country = Object.assign({}, country, {apiName: country.name})
    for (let entry of dictionary) {
      if (entry[0] === country.name) {
        return Object.assign({}, country, {name: entry[1]});
      }
    }
    return country;
  })
}

export default getInitialData;