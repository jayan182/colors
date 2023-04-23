import {useReducer} from 'react';
import reducer from '../Components/Fruits/reducer';
import {FruitContext} from './fruitContext';

const initialState = {  
    toast: false,
    modalShow: false,
    fruitList: [],
    fruits: {},
    error: {},
    fruitEdit: [],
    editedKey: "",
    message: "",
    cartList: [],
}

const FruitStore = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FruitContext.Provider value={[state, dispatch]}>
            {children}
        </FruitContext.Provider>
    )
}

export default FruitStore;