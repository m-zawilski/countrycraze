import React from 'react';
import EmptyCheck from '../../Common/EmptyCheck';
import Card from './Card';

function AlternativeSpellingsCard({country}) {
  return (
    <Card>
      <EmptyCheck value={country.altSpellings}>
        <h3>Alternative spellings</h3>
        {Object.values(country.altSpellings).map((el, i) => {
          return <p className="center" key={i}>{el}</p>;
        }, "")}
      </EmptyCheck>
    </Card>
  )
}

export default AlternativeSpellingsCard
