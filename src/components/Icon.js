import React, {useState, useEffect} from 'react';

import cloudy from "../icons/cloudy.svg";
import sun from "../icons/sun.svg";
import rainy from "../icons/rainy.svg";
import windy from "../icons/windy.svg";
import snowy from "../icons/snowy.svg";
import storm from "../icons/storm.svg";
import cloudySun from "../icons/cloudy-sun.svg";



const Icon = (props) => {

  let pics = {
    'Clear': sun,
    'Rain':rainy,
    'Clouds' : cloudy,
    'Atmosphere':windy,
    'Snow' :snowy,
    'Thunderstorm' :storm,
    'Drizzle' : cloudySun
 }

  return (

    <p><img src={pics[props.weather]}/></p> 
  )
}

export default Icon;
