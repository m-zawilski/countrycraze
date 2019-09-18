import React from 'react'
import Card from './Card';

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
    <Card>
      <h3>Known as</h3>
      {Object.values(country.translations).map((el, i) => {
        return <p key={i}><span>{mapToLanguageName(Object.keys(country.translations)[i])}</span> {el}</p>
      })}
    </Card>
  )
}

export default LanguagesCard
