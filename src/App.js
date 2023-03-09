import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Card from 'react-bootstrap/Card';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

import {useState, useEffect} from 'react';

function App() {
  const [colors, setColors] = useState([]);
  const [colorData, setColorData] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [primaryColor, setPrimaryColor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('');
  let selectColorLength = Object.values(selectedColor).length;

  useEffect(()=>{
    let tempColor = localStorage.getItem('colors');
    if(tempColor !== null){
      setColors(JSON.parse(tempColor));
      filterPrimaryColors(JSON.parse(tempColor));
    }
  },[]);

  const filterPrimaryColors = (tempColor) => {
    if(Object.values(tempColor).length > 0){
      let primary = Object.values(tempColor).filter((tmp)=>{return tmp.is_popular === true});

      setPrimaryColor(primary);
    }
  }
  
  const handleChange = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    let value = e.target.value;
    
    if(name === "is_popular")
      setColorData(values => ({...values, [name]: checked}));
    if(name !== "is_popular")
      setColorData(values => ({...values, [name]: value}));
  }

  const registerColor = () => {
    setLoading(true);
    let tmpColor = [...colors];
    let index = tmpColor.findIndex((tmp)=>{return tmp.color_name === selectedColor.color_name});

    if(index === -1){
      if(!colorData.hasOwnProperty('is_popular')){
        setColorData(values => ({...values, ['is_popular']: false}));
      }
      let tempColor = [...colors, colorData];
      localStorage.setItem('colors',JSON.stringify(tempColor));
      setColors(colorData);
      setMode('create');
    }
    else{
      tmpColor[index] = {...colorData};
      localStorage.setItem('colors',JSON.stringify(tmpColor));
      setColors(tmpColor);
      setMode('update');
    }

    setTimeout(()=>{
      setMode('');
      setLoading(false);
    },[5000]);
  }

  const editColor = (offset) => {
    setSelectedColor(offset);
    setColorData(offset);
  }

  const DeleteColor = (offset) => {
    setLoading(true);
    let tmpColor = [...colors];
    let index = tmpColor.findIndex((tmp)=>{return tmp.color_name === offset});

    if(index !== -1){
      tmpColor.splice(index, 1);
      localStorage.setItem('colors',JSON.stringify(tmpColor));
      filterPrimaryColors(tmpColor);
      setColors(tmpColor);
      setMode('delete');
    }

    setTimeout(()=>{
      setMode('');
      setLoading(false);
    },[5000]);
  } 

  const displayToast = (mode) => {
    switch(mode){
      case 'create':
        return (
          <ToastContainer position="top-end">
            <Toast
              className="d-inline-block m-1"
              bg={"success"}
            >
              <Toast.Header>
                <strong className="me-auto">Color added successfully!</strong>
              </Toast.Header>
            </Toast>
            </ToastContainer>
        );
      case 'update':
          return (
            <ToastContainer position="top-end">
              <Toast
                className="d-inline-block m-1"
                bg={"info"}
              >
                <Toast.Header>
                  <strong className="me-auto">Color updated successfully!</strong>
                </Toast.Header>
              </Toast>
            </ToastContainer>
          );
      case 'delete':
        return (
          <ToastContainer position="top-end">
            <Toast
              className="d-inline-block m-1"
              bg={"danger"} 
            >
              <Toast.Header>
                <strong className="me-auto">Color deleted successfully!</strong>
              </Toast.Header>
            </Toast>
          </ToastContainer>
        );
    }
  }
  
  return (
    <div>
      {
        loading === true &&
          displayToast(mode)
      }
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tours of Colors</Navbar.Brand>
        </Container>
      </Navbar>

      {
        Object.values(primaryColor).length > 0 &&
          <Card>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col 
                    sm={{span: 6, offset: 5}}
                    lg={{span: 6, offset: 5}}
                    md={{span: 6, offset: 5}}
                  >
                    <h2>Primary Colors</h2>
                  </Col>
                  {
                    Object.values(primaryColor).map((primary,key)=>{
                      return (
                        <Col 
                          sm={{span: 1, offset: 1}}
                          lg={{span: 1, offset: 1}}
                          md={{span: 1, offset: 1}}
                          key={key}
                          onClick={()=>{editColor(primary)}}
                          style={{display: 'flex', cursor: 'pointer',backgroundColor: primary.color_code, height: 50, borderRadius: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}
                        >
                          <span>{primary.color_name.charAt(0)}</span>
                        </Col>
                      )
                    })
                  }
                </Row>
              </Container>
            </Card.Body>
          </Card>
      }
  
      <Container>
        <Row>
          <Col sm={12} md={4} lg={6}>
            <Form onSubmit={()=>{registerColor()}}>
              <FloatingLabel
                controlId="floatingInput"
                label="Color Name"
                className="mb-3"
              >
                <Form.Control 
                  name="color_name" 
                  type="text" 
                  placeholder="Color Name" 
                  onChange={(e)=> {handleChange(e)}} 
                  defaultValue={selectColorLength > 0 ? selectedColor.color_name : ""}
                />
              </FloatingLabel>

              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Is Primary ?"
                name="is_popular"
                //checked={selectColorLength > 0 ? selectedColor.is_popular : false}
                onChange={(e)=> {handleChange(e)}}
              />

              <FloatingLabel controlId="floatingPassword" label="Color code">
                <Form.Control 
                  name="color_code" 
                  type="text" 
                  placeholder="Color Code" 
                  onChange={(e)=> {handleChange(e)}} 
                  defaultValue={selectColorLength > 0 ? selectedColor.color_code: ""}
                />
              </FloatingLabel>

              <Button variant="primary" type="submit">
                {selectColorLength > 0 ? "Update" : "Register"}
              </Button>
            </Form>
          </Col>

          <Col sm={12} md={8} lg={6}>
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
                              <Button variant="success" type="submit" onClick={()=>{editColor(color)}}>
                                Edit
                              </Button>
                            </td>
                            <td>
                              <Button variant="danger" type="submit" onClick={()=>{DeleteColor(color.color_name)}}>
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
        </Row>
      </Container>
    </div>
  );
}

export default App;
