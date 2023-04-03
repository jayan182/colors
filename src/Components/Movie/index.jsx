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
                        genre={genre} 
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

            <div style={styles.container}>
               {/* {
                   [1,2,3,4,5,6,7,8,9,10].map((number,key)=>{
                       return (
                           <button 
                            key={key}
                            onClick={()=>{changePage(number)}}
                           >{number}</button>
                       )
                   })
               } */}

                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                    </Pagination>`
            </div>
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