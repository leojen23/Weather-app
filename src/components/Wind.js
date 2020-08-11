import React from 'react';

const Wind = (props) => {
  return (

    <div className="wind">Vent {props.wind.speed}km/h ({props.wind.deg}°)</div>
  ) 
}

export default Wind;
