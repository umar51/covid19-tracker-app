import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

const fetchData = async () => {
    try{
        // const response = await axios.get(url); //geting reponse only
        // const {data} = await axios.get(url); //geting directly data object from the response
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url); //geting directly the values of deaths, confirmend, recovered and lastupdate from data object of the response
        
        return {confirmed,recovered, deaths, lastUpdate}; //directly returned the values

    }catch(error)
    {console.error("not fetched");}
}

export default fetchData;