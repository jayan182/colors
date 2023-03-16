import {useState, useEffect} from 'react';
import Card from '../../Common/Wrapper';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function List(){
    const [colors, setColors] = useState([]);

    useEffect(()=>{
        let tempColor = localStorage.getItem('colors');
        if(tempColor != null){
          setColors(JSON.parse(tempColor));
        }
    },[]);

    return (
        <Card>
            <Col>
                <Container>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
                                <th>Color Name</th>
                                <th>Is Primary ?</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            Object.values(colors).length > 0 &&
                                Object.values(colors).map((color,key)=>{ 
                                return (
                                    <tr key={key}>
                                        <td>{key + 1}.</td>
                                        <td><div style={{backgroundColor: color.color_code, height: 20, borderRadius: 50, width: 20}}></div></td>
                                        <td>{color.color_name}</td>
                                        <td>{color.is_popular === true ? "True" : "False"}</td>
                                        <td>
                                            <Button variant="success" type="submit" onClick={()=>{}}>
                                            Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" type="submit" onClick={()=>{}}>
                                            Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </Col>
        </Card>
    )
}

export default List;