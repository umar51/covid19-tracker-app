import React, {useEffect, useState} from 'react';


import {Cards, Chart, CountryPicker } from './components';
import styles  from "./App.module.css";

import fetchData from './api/api'; //{} is used as const fetchData was not exported as default 
                                // './api/index.js is similar to './api' for compiler.
import covidImage from './images/covid-19.png';

 const App = () => {
    const [data, setData] = useState({});
    
    const [country, setCountry]= useState("");


    const handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country); //data for countrywise is fetched here
       
        setData(fetchedData);
        setCountry(country);
        

    }
   
    //data for global data is fetched here
     useEffect(() => {
         const fetch = async () => {
            const res = await fetchData(); 
            setData(res); 
         console.log(data)
         }
         fetch()      
     },[])

//App is parent of all component so its constants can be passed down to children as props   

    return (
        <div className={styles.container}>
            
            <img src={covidImage} alt='Covid-19' className={styles.image}/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
            
        </div>
    )
}

export default App;