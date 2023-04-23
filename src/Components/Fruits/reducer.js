const reducer = (state, action) => {
    switch(action.type){
        case "list_request": 
            return {
                ...state, 
                
            };
        case "add_request":
            if(Object.values(state.fruitEdit).length === 0){
                let fruitList = state.fruitList.push(state.fruits);
                state.fruits = {
                    name: "",
                    image: "",
                };
                state.toast = true;
                state.message = 'Added Successfully !';
                state.fruitEdit = [];
                return {
                    ...state, 
                    ...fruitList
                };
            }
            else{
                state.error = {};
                let temp = [];

                state.fruitList.map((tmp,key)=>{
                    if(key === state.editedKey){
                        temp.push(state.fruitEdit[0]);
                    }
                    else{
                        temp.push(tmp);
                    }
                })

                state.fruitEdit = [];
                state.editedKey = '';
                state.toast = true;
                state.message = 'Updated Successfully !';
                return {
                    ...state,
                    ...{"fruitList" : temp}
                }
            }
        case "edit_request":
            let fruitEdit = state.fruitList.filter((tmp)=>{return tmp.name === action.value});
            state.editedKey = action.key;
            return { 
                ...state, 
                fruitEdit,
                
            }
        case "delete_request":
            {
                let index = state.fruitList.findIndex((tmp)=>{return tmp.name === action.value});

                if(index !== -1){
                    let temp_fruits = [...state.fruitList];
                    temp_fruits.splice(index, 1);
                    state.toast = true;
                    state.message = 'Deleted Successfully !';
                    let fruitList = {"fruitList": temp_fruits};
                    return {
                        ...state,
                        ...fruitList
                    }
                }
                else{
                    return {
                        ...state
                    }
                }
            }
        case "add_remove_from_cart":
            {
                let index = state.cartList.findIndex((tmp)=>{
                    return tmp.name === action.value.name
                });
        
                if(index === -1){
                    let cartList = state.cartList.push(action.value);
                    return {
                        ...state,
                        ...cartList
                    }
                }
                else{
                    let temp_fruits = [...state.cartList];
                    temp_fruits.splice(index, 1);
                    let cartList = {"cartList": temp_fruits};
                    return {
                        ...state,
                        ...cartList
                    }
                }
            }
        case "handle_change":
            const name = action.value.target.name;
            const value = action.value.target.value;

            if(Object.values(state.fruitEdit).length > 0){
                let temp = {[name]: value};
                let fruitEdit = [{...state.fruitEdit[0], ...temp}];
                return {
                    ...state,
                    fruitEdit
                }
            }
            else{
                let temp = {[name]: value};
                let fruits = {"fruits" : {...state.fruits, ...temp}};

                return {
                    ...state,
                    ...fruits
                }
            }
        case "SET_UNSET_TOAST":
            return {
                ...state,
                toast: false,
            }
        default:
            return state;
    }
}

export default reducer;