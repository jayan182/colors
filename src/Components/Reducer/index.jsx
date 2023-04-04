import { useReducer } from 'react';
//import {initialState, reducer} from './reducer';
import Wrapper from '../../Common/Wrapper';

const initialState = {
    counter: 0
};

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
           return {
               ...state, counter: state.counter + 1
           }
        case "DECREMENT":
            return {
                ...state, counter: state.counter - 1
            }
        case "RESET":
            return {
                ...state, counter: initialState.counter
            }
        default:
           return state;
    }
}

function Index() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const reset = () => {
        dispatch({type: 'RESET'})
    }

    return (
       <Wrapper>
        <button onClick={()=>{decrement()}}>-</button>
        <h2>{state.counter}</h2>
        <button onClick={()=>{increment()}}>+</button>
        <button onClick={()=>{reset()}}>RESET</button>
       </Wrapper>
    )
}

export default Index;