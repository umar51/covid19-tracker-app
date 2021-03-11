import React, {useState, useEffect} from 'react';
import { fetchDailyData } from "../../api";
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]); //since dailydata fetched from api has arrays of objects so setting initially an empty array

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData()); //seting the dailyData equals to the object consisting of many objects from fetchData() 

           
        }
        fetchAPI();
       
        
    }, [])

    const lineChart = (
        dailyData.length ?
        <Line
            data={{
                labels: dailyData.map(({date}) => date), //maping over dailydata object and passing each object as {date} object and returning the required values from each of them which are date, confirmed cases and deaths
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label:'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label:'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.8)',
                    fill: true,
                }],
            }}
        /> : null  //if dailydata array has a valuen it will be true and it will display <Line/> component otherwise return null

    );

    const barChart =  (
        confirmed ? 
        (<Bar
            data={{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(0,0,255,0.5)', 
                                        'rgba(0, 255, 0, 0.5)',
                                        'rgba(255, 0, 0, 0.8)'],
                    data:[confirmed.value, recovered.value ,deaths.value]       
                }]
            }}
            options={{
                legend :{display: false},
                title: {display: true, text: `Current state in ${country}`}

            }}

        />): null 
    );
    return (
        <div className={styles.container}>
           {country ? barChart : lineChart} {/*shows linechart for global and barchart when country has some value*/}
            
        </div>
    )
}

export default Chart;