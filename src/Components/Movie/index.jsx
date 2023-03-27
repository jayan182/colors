import Wrapper from '../../Common/Wrapper/index';
import {useFetch} from "../../Hooks/useFetch";
import MovieCard from '../../Common/Card/movieCard';

function Index(){
    const data = useFetch('https://yts.torrentbay.to/api/v2/list_movies.json');
    
    //if(data !== undefined){
        console.log("data",(data));
    //}
    return (
        <>
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
                                    <MovieCard movie={movie} key={key} />
                                )
                            })
                        :
                            <p>Loading ...</p>
                    }
                </div>
                :
                    <p>Loading ...</p>
            }
        </>
    )
}

export default Index;