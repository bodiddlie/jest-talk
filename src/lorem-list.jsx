import React from 'react';

const styles = [
  { backgroundColor: 'PapayaWhip' },
  { backgroundColor: 'Orchid' },
  { backgroundColor: 'DodgerBlue' },
  { backgroundColor: 'FireBrick' },
  { backgroundColor: 'Goldenrod' },
];

export const LoremList = ({paragraphCount}) => {
  let lorems = [];
  for (let i = 0; i < paragraphCount; i++) {
    lorems.push(<LoremItem key={i} number={i+1} color={styles[i % 5]} />);
  }
  return (
    <div>
      <div>
        {lorems}
      </div>
    </div>
  )
}

export const LoremItem = ({number, color}) => (
  <div>
    <h3>Item #{number}</h3>
    <p style={color}>Lorem ipsum dolar sit amet.</p>
  </div>
);