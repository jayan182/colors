import Wrapper from '../../Common/Wrapper/index';
import {useFetch} from "../../Hooks/useFetch";
import MovieCard from '../../Common/Card/movieCard';
import { useNavigate } from "react-router-dom";

function Index(){
    const navigate = useNavigate();
    const data = useFetch('https://yts.torrentbay.to/api/v2/list_movies.json');
    
    const cardClick = (imdb_code) => {
        navigate(`${imdb_code}`);
    };

    return (
        <div style={{alignItems:'center', justifyContent: 'space-around', display: 'flex', flexDirection: 'column'}}>
            <h2>Movie</h2>

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
        </div>
    )
}

export default Index;