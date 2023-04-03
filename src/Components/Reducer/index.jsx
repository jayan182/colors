import { useReducer } from 'react';

const initialCounter = 0;

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT": 
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            console.log("state");
    }
}

function Index() {
    const [counter, dispatch] = useReducer(reducer, initialCounter);

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    return (
       <>
       <button onClick={()=>{decrement()}}>-</button>
       <h2>{counter}</h2>
       <button onClick={()=>{increment()}}>+</button>
       </>
    )
}

export default Index;