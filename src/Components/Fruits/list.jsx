import { memo } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function List({fruits, deleteFruit, edit, cart}){
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
                                <tr>
                                    <td>
                                        <input 
                                            type="checkbox"
                                            onClick={()=>{cart(fruit)}}
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
                                        <Button 
                                            variant="success"
                                            onClick={()=>{edit(fruit.name, key)}}
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={()=>{deleteFruit(fruit.name)}}
                                        >
                                            Delete
                                        </Button>
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