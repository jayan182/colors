
import {useContext} from 'react';
import {FruitContext} from '../../Context/fruitContext';
import {action} from './actionTypes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Create(){
   const [state, dispatch] = useContext(FruitContext);
   
    let {
        fruitEdit: update,
        fruits,
        error
    } = state;
   
    console.log("state",state);
    
   return (
        <>
            {
                Object.values(error).length > 0 &&
                    <span>{error.name}</span>
            }

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fruit Image</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Fruit Image" 
                        name="image"
                        value={
                            Object.values(update).length > 0 ?
                                update[0].image
                            :
                                fruits.image    
                        }
                        onChange={
                            (e)=>{
                                dispatch({
                                    type: action.HANDLE_CHANGE,
                                    value: e
                                })
                            }
                        }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fruit Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Fruit Name" 
                        name="name"
                        value={
                            Object.values(update).length > 0 ?
                                update[0].name
                            :
                                fruits.name  
                        }
                        onChange={
                            (e)=>{
                                dispatch({
                                    type: action.HANDLE_CHANGE,
                                    value: e
                                })
                            }
                        }
                    />
                </Form.Group>

                <Button 
                    variant="primary" 
                    onClick={()=>{
                        dispatch({
                            type: action.ADD_REQUEST
                        })
                    }}
                >
                    {
                        Object.values(update).length > 0 ?
                            "Update"
                        :
                            "Register"
                    }
                </Button>
            </Form>
        </>
    )   
}

export default Create;