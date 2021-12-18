import React from 'react';
//
import landImg from './Welcome/land_img.jpg';
import trustImg from './../imgs/trust.svg';
import passionImg from './../imgs/passion.svg';
import satisImg from './../imgs/satisfaction.svg';
import responImg from './../imgs/responsability.svg';
import innovImg from './../imgs/innovation.svg';
import focusImg from './../imgs/clientOriented.svg';
//
import OurValues from './Values/OurValues';
import Welcome from './Welcome/Welcome';

function MainDiv() {
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
    <>
      <Welcome bgImage={landImg} />
      <OurValues valuesArr={valuesArr} />
    </>
  );
}

export default MainDiv;
