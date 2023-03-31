import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useFetch} from '../../Hooks/useFetch';

function MovieDetail(){
    const params = useParams();
    let imdb_id = params.movieId;

    let url = `https://yts.torrentbay.to/api/v2/movie_details.json?imdb_id=${imdb_id}`;
    let data = useFetch(url);

    return (
        <div style={styles.container}>
        {
            data !== undefined ?
                Object.values(data).length > 0 ?
                    <>
                        <div style={styles.body}>
                            <div style={styles.leftContainer}>
                                <img    
                                    src={`${data.data.movie.large_cover_image}`}
                                    style={{objectFit: 'cover'}}
                                />
                            </div>

                            <div style={styles.rightContainer}>
                                <div style={styles.inner}>
                                    <div style={styles.leftContainer}>
                                        <h1>{data.data.movie.title}</h1>
                                        <p>Rating: {data.data.movie.rating} </p>
                                        <p>Year: {data.data.movie.year} </p>
                                        <p>Genre: 
                                            {
                                                data.data.movie.genres.map((genre,key)=>{
                                                    return (
                                                        <span key={key}> {genre}
                                                            {
                                                                (data.data.movie.genres.length > 0 && data.data.movie.genres.length - 1 !== key) &&
                                                                    <span>,</span>
                                                            }
                                                        </span>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>

                                    <div style={styles.rightContainer}>
                                        <img    
                                            src={`${data.data.movie.medium_cover_image}`}
                                            style={{objectFit: 'cover'}}
                                            width={100}
                                            height={150}
                                        />
                                    </div>
                                </div>
                                <p>{data.data.movie.description_full}</p>
                            </div>
                        </div>
                    </>
                :
                    <p>Loading ...</p>
            :
                <p>Loading ...</p>
        }
        </div>
    )
}

const styles={
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    inner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    leftContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    }
}

export default MovieDetail;  