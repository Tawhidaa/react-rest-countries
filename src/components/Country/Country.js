import React from 'react';
import './country.css'


const Country = (props) => {
  //  console.log(props.country)

    const{area,region,population,name,flags}=props.country;
    return (
        <div className='country'>
            <h2>Country name: {name.common} </h2>
            <img src={flags.png} alt=""/>
            <h3>Population: {population}</h3>
            <h4>Area: {area}</h4>
            <h5>Region:{region}</h5>
        </div>
    );
};

export default Country;