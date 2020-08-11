import React, {useEffect, useState} from 'react';
import Days from './Days';
import Icon from './Icon';
import City from './City';
import Wind from './Wind';
import Temperature from './Temperature';
import axios from 'axios';

import moment from 'moment';

const Weather = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city,setCity] = useState('');
  const [temp,setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [weather, setWeather] = useState([])
  const [days,setDays]= useState(
    {
      day1 : '',
      day2 : '',
      day3 : '',
      day4 : '',
      day5 : '',
    }
  )

  // API request infos
 let Url = "https://api.openweathermap.org/data/2.5/forecast?q="
 let APIkey = '9dd02ae5e147a4f68990bcdb83cf113d';
 let cityName = 'Lyon'
  const fetchData = () => {
    

    // API request
    axios.get( Url + cityName + "&appid=" + APIkey)

    // promise from API
    .then((res) => {
      setIsLoaded(true);
      setCity(res.data.city.name);
      setWind(res.data.list[0].wind);
      setTemp(parseInt(res.data.list[0].main.temp / 10));
      setWeather(res.data.list[0].weather[0].main);
      setDays(
        {
          day1: moment(res.data.list[0].dt_txt).format('dddd'),
          day2: moment(res.data.list[8].dt_txt).format('dddd'),
          day3: moment(res.data.list[16].dt_txt).format('dddd'),
          day4: moment(res.data.list[24].dt_txt).format('dddd'),
          day5: moment(res.data.list[32].dt_txt).format('dddd')
        })

      //   const getForecast = (dayIndex) => {
      //     setWind(res.data.list[dayIndex].wind);
      //     setTemp(parseInt(res.data.list[dayIndex].main.temp / 10));
      //     setWeather(res.data.list[dayIndex].weather[0].main);
      // }
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  useEffect(() => {fetchData()}, [])

  // const log = () => {
  //       console.log(response)

  //RENDER
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else 
  return (

    <div className="weather card darken-1">

        <div className="card-content white-text">
            <>

              <City city={city}/>
              <Icon weather={weather}/>
              <Temperature temp={temp}/>
              <Wind wind={wind}/>
            </>
      
      </div>

        <Days 
        days={days}
        // changeDay={getForecast} 
        />

    </div>
      // function updateDate (day) 
  );
  }
export default Weather;