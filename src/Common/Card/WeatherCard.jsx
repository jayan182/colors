import {GetTimeFromDate} from '../../Lib/getTimeFromDate';

function WeatherCard({time, icon, temperature, id}) {
    const styles = {
        container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
        },
        imageContainer :{       
            flex: 3,
            display: 'flex',
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: '50%'
        },
        nameContainer: {
            flex: 1,
            display: 'flex',
        },
        nameText: {
            color: '#828893'
        }
    }

    return (
        <div style={styles.container} key={id}>
            <div style={styles.nameContainer}>
                <span style={styles.nameText}>
                    {GetTimeFromDate(time)}
                </span>
            </div>

            <div style={styles.imageContainer}>
                <img src={`${icon}`} style={styles.image} />
            </div>

            <div style={styles.nameContainer}>
                <span style={styles.nameText}>
                    {temperature}&deg;C
                </span>
            </div>
        </div>
    )
}

export default WeatherCard;