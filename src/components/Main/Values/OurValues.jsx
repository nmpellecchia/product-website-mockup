import React from 'react';

function OurValues(props) {
  return (
    <article className="h-screen bg-yellow-500 ">
      <h1 className="text-3xl font-title text-white ml-3 pt-3">
        Our core values
      </h1>
      <ul className="h-3/4 grid grid-cols-2 gap-5 p-10 lg:grid-cols-3 lg:gap-10">
        {props.valuesArr.map(value => {
          return (
            <li
              key={value.name}
              className="grid grid-cols-1 justify-items-center text-white text-xl"
            >
              <img src={value.icon} className="h-10 w-10" />
              <p className="text-center pt-3">{value.name}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default OurValues;
