import React from 'react'
import Card from './Card';
import EmptyCheck from '../../Common/EmptyCheck';

const languagesMap = [["de", "German"], ["es", "Spanish"], ["fr", "French"], ["ja", "Japanese"], ["it", "Italian"], 
  ["br", "Brazilian Portuguese"], ["pt", "Portuguese"], ["nl", "Dutch"], ["hr", "Serbo-Croatian"], ["fa", "Farsi"]]

const mapToLanguageName = (code) => {
  for(let language of languagesMap) {
    if(language[0] === code){
      return language[1]
    }
  }
}

function LanguagesCard({country}) {
  return (
    <EmptyCheck value={country.translations}>
      <Card>
        <h3>Translations</h3>
        {Object.values(country.translations).map((el, i) => {
          return <EmptyCheck value={el} key={i}>
            <p>
              <span className="left">{mapToLanguageName(Object.keys(country.translations)[i])}</span> 
              <span className="right">{el}</span>
            </p>
          </EmptyCheck>
        })}
      </Card>
    </EmptyCheck>
  )
}

export default LanguagesCard
