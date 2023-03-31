function Pills({genre, key, style, onPress}) {
    return (
        <div 
            key={key} 
            style={style} 
            onClick={()=>{onPress(genre.name)}}
        >
            <p>{genre.name}</p>
        </div>
    )
}

export default Pills;