import React from 'react'
import Card from './Card';

function LanguagesCard({country}) {
  return (
    <Card>
      {Object.values(country.translations).map((el, i) => {
        return <p key={i}>{el}</p>
      })}
    </Card>
  )
}

export default LanguagesCard
