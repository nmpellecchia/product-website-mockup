import React from 'react';
import landImg from './land_img.jpg';

function Welcome() {
  return (
    <article
      className="w-full h-60 md:h-80 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${landImg})` }}
    >
      <h1 className="text-center text-5xl text-yellow-200 font-title">
        Our dream is to make <span className="text-pink-500">yours</span> true
      </h1>
    </article>
  );
}

export default Welcome;
