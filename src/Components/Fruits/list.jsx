import { memo, useContext } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {FruitContext} from '../../Context/fruitContext';
import {action} from './actionTypes';
import {Images} from '../../Assets'

function List(){
    let [state,dispatch] = useContext(FruitContext);
    let {
        fruitList: fruits
    } = state;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fruits Name</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.values(fruits).length > 0 ?
                        Object.values(fruits).map((fruit,key)=>{
                            return (
                                <tr key ={key}>
                                    <td>
                                        <input 
                                            type="checkbox"
                                            onClick={()=>{
                                                dispatch({
                                                   type: action.ADD_REMOVE_FROM_CART,
                                                   value: fruit
                                                })
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <img 
                                            src={`${fruit.image}`}
                                            style={{width: 50, height: 50, borderRadius: 50,marginRight: 10}} 
                                        />
                                        {fruit.name}
                                    </td>
                                    <td>
                                        <img 
                                            src={Images.edit} 
                                            style={{width: 20, height: 20, cursor: 'pointer'}}
                                            onClick={()=>{
                                                dispatch({
                                                    type: action.EDIT_REQUEST,
                                                    value: fruit.name,
                                                    key: key,
                                                })
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <img 
                                            src={Images.delete} 
                                            style={{width: 20, height: 20, cursor: 'pointer'}}
                                            onClick={()=>{
                                                dispatch({
                                                    type: action.DELETE_REQUEST,
                                                    value: fruit.name
                                                })
                                            }}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    :
                        <tr>
                            <td colSpan={4}>No Data Available</td>
                        </tr>
                }
            </tbody>
        </Table>
    )
}

export default memo(List);