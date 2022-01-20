import React from 'react';

function Welcome(props) {
  return (
    <article
      className="w-full h-60 md:h-80 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url('${props.bgImage}')` }}
    >
      <h1 className="text-center text-5xl text-yellow-300 font-title px-2 bg-yellow-300 bg-opacity-20">
        Our dream is to make <span className="text-pink-500">yours</span> true
      </h1>
    </article>
  );
}

export default Welcome;
