import React from 'react';

const Temperature = (props) => {
  return (

    <span className="temperature">{props.temp}°C</span>
  )
}

export default Temperature;
