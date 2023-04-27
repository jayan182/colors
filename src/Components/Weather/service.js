import {WEATHER} from '../../Config/api';

export const getForecast = async(params) => {
    let data = WEATHER.get('forecast.json', {params}).then((res)=>{
        return res.data;
    });
    return data;
}
