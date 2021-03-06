import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api/api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
        
        
        
    }, [setFetchedCountries]) //whenever setFetchedCountries changes, useEffect rerenders
    console.log(fetchedCountries);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> {handleCountryChange(e.target.value)}}>
                <option value=''>Global</option>
                 {fetchedCountries.map((country, i)=> <option key={i} value={country.name}>{country.name}</option>)} {/*its react rule to pass a index/key number i while mapping over array */}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;