import {Link} from "react-router-dom";

function MovieCard({movie, index, cardClick}){
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: 200,
            height: 320,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            cursor: 'pointer',
        }
    }

    return (
       <Link 
            style={styles.container} 
            key={index} 
            //onClick={()=>{cardClick(movie.imdb_code)}}
            to={`/movie/${movie.imdb_code}`}
        >
            <img 
                src={`${movie.medium_cover_image}`} 
                width={180}
                height={280}
            />
            <p>
                {movie.title}
            </p>
       </Link>
    )
}
export default MovieCard;