import {createContext, useReducer} from 'react';
import reducer from './reducer';

const initialState = {
    counter: 0
}

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext();

export default Store;