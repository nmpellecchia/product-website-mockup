import React from 'react';

function OurValues(props) {
  return (
    <article className="min-h-screen bg-yellow-500 ">
      <h1 className="text-3xl font-title text-white ml-3 pt-3">
        Our core values
      </h1>
      <ul className="h-full grid grid-cols-2 gap-8 justify-items-center p-8 lg:grid-cols-3 lg:gap-10">
        {props.valuesArr.map(value => {
          return (
            <li
              key={value.name}
              className="w-32 h-32 grid grid-cols-1 justify-items-center p-6 text-white text-sm border-2 border-white rounded-xl md:w-48 md:h-48 md:text-xl"
            >
              <img src={value.icon} className="h-10 w-10" alt="" />
              <p className="text-center pt-3 uppercase">{value.name}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default OurValues;
