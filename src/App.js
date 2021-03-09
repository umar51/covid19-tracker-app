import React, {useEffect, useState} from 'react';


import {Cards, Chart, CountryPicker } from './components';
import styles  from "./App.module.css";

import fetchData from './api'; //{} is used as const fetchData was not exported as default 
                                // './api/index.js is similar to './api' for compiler.

 const App = () => {
    const [data, setData] = useState({});

     useEffect(() => {
         const fetch = async () => {
            const res = await fetchData(); 
            setData(res); 
         console.log(data)
         }
         fetch()      
     }, [])

    return (
        <div className={styles.container}>
            
            <Cards data={data}/>
            <CountryPicker/>
            <Chart/>
            
        </div>
    )
}

export default App;