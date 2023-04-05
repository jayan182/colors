import { useContext } from 'react';
import Wrapper from '../../Common/Wrapper';
import { Context } from './store';

function Index() {
    const [state, dispatch] = useContext(Context);

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