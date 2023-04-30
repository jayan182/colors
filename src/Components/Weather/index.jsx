import Wrapper from '../../Common/Wrapper/index';
import Search from './search';
import General from './general';
import Hour from './hour';
import ForeCastText from './forecastText';
import {useState, useEffect} from 'react';
import {getForecast, getCurrentForecast} from './service';

function Index(){
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('Kathmandu');
    const [weatherData, setWeatherData] = useState([]);

    async function data(){
        const params = {
            key: "318712e780144abcac530843233001",
            q: city,
            days: 1,
            aqi: false,
            alerts: 'no',
        };
        let data = await getForecast(params);
       
        if(data){
            setLoading(false);
            setWeatherData(data);
        }
    }

    async function getCurrent(){
        const params = {
            key: "318712e780144abcac530843233001",
            q: city
        };
        let data = await getCurrentForecast(params);
       
        if(data){
            console.log("data",data);
        }
    }

    useEffect(()=>{
        setLoading(true);
        data();
        getCurrent();
    },[]);

    const cityChange= (e) => {
        let value = e.target.value;
        setCity(value);
    }

    const searchCity = () => {
        setLoading(true);
        data();
    }   

    return (
       <Wrapper>
           {
                loading ?
                    <span>Loading ...</span>
                :
                    <div style={{display: 'flex',flexDirection: 'column',paddingLeft: '20%', paddingRight: '20%', alignItems:'center', justifyContent:'center', backgroundColor: '#0B131E'}}>
                        {
                            Object.values(weatherData).length > 0 &&
                                <>
                                    <Search cityChange={cityChange} searchCity={searchCity} />
        
                                    <General weather={weatherData} /> 
        
                                    <Hour weather={weatherData} />
        
                                    <ForeCastText weather={weatherData} />
                                </>
                        }
                    </div>
           }
       </Wrapper>
    )
}

export default Index;