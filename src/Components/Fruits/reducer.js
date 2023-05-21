const reducer = (state, action) => {
    switch(action.type){
        case "list_request": 
            return {
                ...state, 
            };
        case "add_request":
            //add condition
            //check if fruitEdit have edited data or not if yes edit else add 
            if(Object.values(state.fruitEdit).length === 0){
                // state.fruits consists of fruits to be added or updated from form. 
                // state.fruitList  consists of list of fruits list 
                // state.fruitList.push(state.fruits)  pushing one fruit from form to list of fruits ( variable named let fruitList)
                let fruitList = state.fruitList.push(state.fruits);

                // empty fruits state to remove it from form.
                state.fruits = {
                    name: "",
                    image: "",
                };
                
                //toast true for displaying message
                state.toast = true;

                //success message
                state.message = 'Added Successfully !';

                //set state.fruitEdit to empty after adding or editing
                state.fruitEdit = [];

                //return added fruit into fruit list
                return {
                    ...state, 
                    ...fruitList
                };
            }
            // edit condition
            else{
                //set error to empty 
                state.error = {};

                //initialization of temp empty array.
                let temp = [];

                // iterate fruistList                                                        
                state.fruitList.map((tmp,key)=>{
                    //check if key is equals to state.editKey
                    //state.editKey  defines which fruit we have clickd for edit
                    if(key === state.editedKey){
                        //if found push state.fruitEdit[0] into temp variable
                        // state.fruitEdit ma jun fruit ko edit button click garyoo tehi fruits matra huncha
                        temp.push(state.fruitEdit[0]);
                    }
                    else{
                        //else edit navayeko data temp ma push garne 
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
            // Fruits list beta edit button click garyoo vane yo case ma aaucha 
            // state.FruitList ma all list of fruits huncha 
            // action.value ma jun fruit ko edit button click garyoo tehi fruit ko name aaucha
            // filter out fruit clicked from fruit list 
            let fruitEdit = state.fruitList.filter((tmp)=>{return tmp.name === action.value});
            // fruitEdit ma jun fruit edit garyoo tehi 1 ta matra aaucha

            // state.editedKey ma action.key set gako 
            state.editedKey = action.key;

            return { 
                ...state, 
                fruitEdit,
            }
        case "delete_request":
            {
                //setect  fruit to be deleted from fruitList
                let index = state.fruitList.findIndex((tmp)=>{return tmp.name === action.value});

                // if index !== -1 ko vane delete garne 
                if(index !== -1){
                    //temp_fruits vanne variable ma state ko fruit list set gareko 
                    let temp_fruits = [...state.fruitList];

                    //splice to delete the element from fuiit list
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