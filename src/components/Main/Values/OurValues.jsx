import React from 'react';
//
import trustImg from '../../imgs/trust.svg';
import passionImg from '../../imgs/passion.svg';
import satisImg from '../../imgs/satisfaction.svg';
import responImg from '../../imgs/responsability.svg';
import innovImg from '../../imgs/innovation.svg';
import focusImg from '../../imgs/client_oriented.svg';

function OurValues() {
  const valuesArr = [
    {
      icon: trustImg,
      name: 'trust',
    },
    {
      icon: passionImg,
      name: 'passion',
    },
    {
      icon: satisImg,
      name: 'satisfaction',
    },
    {
      icon: responImg,
      name: 'responsability',
    },
    {
      icon: innovImg,
      name: 'innovation',
    },
    {
      icon: focusImg,
      name: 'customer focus',
    },
  ];

  return (
    <article>
      <ul>
        {valuesArr.map(value => {
          return (
            <li key={value.name}>
              <img src={value.icon} alt={`${value.icon} icon`} />
              <p>{value.name}</p>
              <a href="#" className="a">
                aa
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default OurValues;
