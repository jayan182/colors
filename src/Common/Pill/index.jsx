import { PropTypes } from "prop-types";

function Pills({genre, key, style, onPress}) {
    return (
        <div 
            key={key} 
            style={style} 
            onClick={()=>{onPress(genre.name)}}
        >
            <span>{genre.name}</span>
        </div>
    )
}

Pills.propTypes = {
    genre: PropTypes.object,
    key: PropTypes.number,
    style: PropTypes.object,
    onPress: PropTypes.func,
}

export default Pills;