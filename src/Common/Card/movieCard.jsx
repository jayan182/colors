
function MovieCard({movie, key}){
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
        }
    }

    return (
       <div style={styles.container} key={key}>
           <img 
            src={`${movie.medium_cover_image}`} 
            width={180}
            height={280}
           />
           <p>
               {movie.title}
           </p>
       </div>
    )
}
export default MovieCard;