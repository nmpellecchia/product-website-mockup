import React from 'react';

function OurValues(props) {
  return (
    <article>
      <ul>
        {props.valuesArr.map(value => {
          return (
            <li key={value.name}>
              <img src={value.icon} alt={`${value.icon} icon`} />
              <p>{value.name}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default OurValues;
