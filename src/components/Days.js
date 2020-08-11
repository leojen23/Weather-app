import React, {useState} from 'react';


const Days = (props) => {

   

  return (
      
    <div className="card-action Days">

  <a href="#" style={{fontWeight: 'bold'}} >{props.days.day1}</a>
        <a onClick={props.changeDay} href="#">{props.days.day2}</a>
        <a href="#">{props.days.day3}</a>
        <a href="#">{props.days.day4}</a>
        <a href="#">{props.days.day5}</a>
        
    </div>
    
  );
}

export default Days;