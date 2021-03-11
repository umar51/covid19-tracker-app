import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed,deaths, recovered, lastUpdate}}) => {
    
    console.log(confirmed)
    
    if(!confirmed){  // data is supplied here twice, before fetch as empty array and after fetch as data object, if we donot write if this statement, page gives error as confirmed is undefined in case of empty object, after adding this if statement, at empty data object, it displays Loading and at data with object it displays the values 
        return "Loading..."
    }
    
    return (
        <div className={styles.container}>
           <Grid container spacing={3} justify="center">


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}> {/*using cx from classnames, multiple className can be set for styling */}
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={3} separator=',' /> 
                        </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                       <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={3} separator=',' />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant='body2'>Number of Recovered cases of COVID-19</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={3} separator=',' />
                        </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}E</Typography>
                       <Typography variant='body2'>Number of Deaths by COVID-19</Typography>
                   </CardContent>
               </Grid>


           </Grid>

            
        </div>
    )
}

export default Cards;
