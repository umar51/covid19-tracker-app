import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {

    let changableUrl = url;
    if (country){
        changableUrl = `${url}/countries/${country}`;
    }


    try{
        // const response = await axios.get(url); //geting reponse only
        // const {data} = await axios.get(url); //geting directly data object from the response
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl); //geting directly the values of deaths, confirmend, recovered and lastupdate from data object of the response
        
        return {confirmed,recovered, deaths, lastUpdate}; //directly returned the values

    }catch(error)
    {console.error("not fetched");}
}

export const fetchDailyData = async () => {
    
    try {
        const {data} = await axios.get(`${url}/daily`); //response object has arrays of object, saving arrays as data
       
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        })); //the arrays of object (data) are maped on with each array named as dailyData, returning the object with each array saving the confirmed cases, deaths and date of report from each array to its object. all objects are returned inside const modifiedData



        return modifiedData;
        
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
       
        return countries;
     }catch(error){
        console.log(error);
    }

   
}

export default fetchData;

