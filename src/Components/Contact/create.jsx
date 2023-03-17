import {useState, useEffect} from 'react';
import Card from '../../Common/Wrapper';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Wrapper from '../../Common/Wrapper/index';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Create(){
    const [colors, setColors] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    let selectColorLength = Object.values(selectedColor).length;


    useEffect(()=>{
        let tempColor = localStorage.getItem('colors');
        if(tempColor != null){
          setColors(JSON.parse(tempColor));
        }
    },[]);

    return (
        <Wrapper>
            <Col sm={12} md={4} lg={6}>
                <Form onSubmit={()=>{}}>
                    <div className="d-grid gap-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Color Name"
                            className="mb-3"
                        >
                            <Form.Control 
                                name="color_name" 
                                type="text" 
                                placeholder="Color Name" 
                                //onChange={(e)=> {handleChange(e)}} 
                                defaultValue={selectColorLength > 0 ? selectedColor.color_name : ""}
                            />
                        </FloatingLabel>

                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Is Primary ?"
                            name="is_popular"
                            //onChange={(e)=> {handleChange(e)}}
                        />

                        <FloatingLabel controlId="floatingPassword" label="Color code">
                            <Form.Control 
                                name="color_code" 
                                type="text" 
                                placeholder="Color Code" 
                                //onChange={(e)=> {handleChange(e)}} 
                                defaultValue={selectColorLength > 0 ? selectedColor.color_code: ""}
                            />
                        </FloatingLabel>

                        <Button variant="primary" type="submit">
                            {selectColorLength > 0 ? "Update" : "Register"}
                        </Button>
                    </div>
                </Form>
            </Col>
        </Wrapper>
    )
}

export default Create;