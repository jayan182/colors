import Wrapper from '../../Common/Wrapper/index';
import MovieCard from '../../Common/Card/movieCard';
import {useNavigate } from "react-router-dom";
import genres from '../../Lib/genres';
import Pill from "../../Common/Pill";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';

function Index(){
    const [selectedGenre, setSelectedGenre] = useState('Horror');
    const [data, setData] = useState([]);
    let url = `https://yts.torrentbay.to/api/v2/list_movies.json?genre=${selectedGenre}`;
    const navigate = useNavigate();
    let offset = 5;
    
    const getMovieData = (url) => {
        axios.get(url).then((res)=>{
            setData(res.data);
        });
    }
    useEffect(()=>{
        getMovieData(url);
    },[]);

    const cardClick = (imdb_code) => {
        navigate(`${imdb_code}`);
    };

    const changeGenre = async (genre) => {
        setData(undefined);
        setSelectedGenre(genre);
        let url = `https://yts.torrentbay.to/api/v2/list_movies.json?limit=10&genre=${genre}&page=2`;
        getMovieData(url);
    } 

    const changePage = (page) => {
        setData(undefined);
        let url = `https://yts.torrentbay.to/api/v2/list_movies.json?limit=10&page=${page}`;
        getMovieData(url);
    }

    return (
        <div style={{alignItems:'center', justifyContent: 'space-around', display: 'flex', flexDirection: 'column'}}>
            <h2>{`List of ${selectedGenre} movies`}</h2>

            <div style={styles.container}>
            {
                genres.map((genre, key)=>{
                   return (
                    <Pill 
                        onPress={changeGenre}
                        genre={genre.name} 
                        key={key} 
                        style={{
                            display: 'flex',
                            borderRadius: 10,
                            backgroundColor: `${genre.colorCode}`,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width :100,
                            margin: 10,
                            height: 45,
                            cursor: 'pointer',
                        }}
                    />
                   )
                })
            }
            </div >

            {
                data !== undefined ?
                <div style={{
                    display: 'flex',
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                    {          
                        Object.values(data).length > 0 ?
                            data.data.movies.map((movie, key)=>{
                                return (
                                    <MovieCard movie={movie} index={key} cardClick={cardClick} />
                                )
                            })
                        :
                            <p>Loading ...</p>
                    }
                </div>
                :
                    <p>Loading ...</p>
            }

            {
                Object.values(data).length > 0 &&
                    <div style={styles.container}>
                        <Pagination>
                            {
                                [0,1,2,3,4].map((tmp)=>{
                                    return (
                                        <>
                                            {
                                                tmp === 0 && <Pagination.First />
                                            }
                                            {
                                                tmp === 0 &&
                                                    (data.data.page_number) > 5 &&
                                                        <Pagination.Ellipsis />

                                            }
                                            <Pagination.Item>{data.data.page_number + tmp}</Pagination.Item>
                                            {
                                                tmp === 4 &&
                                                    (data.data.page_number) < 5 &&
                                                        <Pagination.Ellipsis />

                                            }
                                            {
                                                tmp === 4 &&
                                                    (data.data.page_number) < 5 &&
                                                        <Pagination.Item>{data.data.movie_count}</Pagination.Item>

                                            }
                                            {
                                                tmp === 4 &&  <Pagination.Last />
                                            }
                                        </>
                                    )
                                })
                            }
                        </Pagination>
                    </div>
            }
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
}

export default Index;