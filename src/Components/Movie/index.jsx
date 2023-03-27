import Wrapper from '../../Common/Wrapper/index';
import {useFetch} from "../../Hooks/useFetch";

function Index(){
    const data = useFetch('https://yts.torrentbay.to/api/v2/list_movies.json');
    
    console.log("data",data);

    return (
        <Wrapper>
            <h2>Movie</h2>
        </Wrapper>
    )
}

export default Index;