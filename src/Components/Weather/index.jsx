import { faRoad } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../../Common/Wrapper/index';
import Search from './search';
import {useState, useEffect} from 'react';
import {getForecast} from './service';

function Index(){
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('Kathmandu');
    const [weatherData, setWeatherData] = useState([]);

    useEffect(()=>{
        setLoading(true);
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
        data();
    },[]);

    return (
       <Wrapper>
           <div>
               {
                   loading ?
                    <span>loading ...</span>
                    :
                        // <div>
                        //     <img 
                        //         src={`${weatherData.current.condition.icon}`}
                        //         width={200}
                        //         height={200}
                        //     />
                        //     <span>{weatherData.location.name}</span>
                        // </div>
                        <span>askjdas</span>
               }
                <Search />

                {/* <General />

                <Hour />

                <ForeCastText /> */}
            </div>
       </Wrapper>
    )
}

export default Index;