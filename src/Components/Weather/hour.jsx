import WeatherCard from '../../Common/Card/WeatherCard';

function Hour(props) {
    let {
        forecast: {
            forecastday
        }
    } = props.weather;
    
    let {
        hour: hours
    } =  forecastday[0];
     
    return (
        <>
            <span style={{color: '#828893'}}>TODAY'S FORECAST</span>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    hours.map((hour, key)=>{
                        return (
                            <WeatherCard 
                                time = {hour.time}
                                icon = {hour.condition.icon}
                                temperature = {`${hour.temp_c}`}
                                id={key}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Hour;