import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import menus from '../../Lib/menu'; 
import clientMenues from '../../Lib/clientMenu'; 
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Pill from '../Pill/index';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';

function NavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  let tmp_menu =  user.role === "Admin" ? menus : clientMenues;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("user"));

    if(data !== null){
      setUser(data);
    }
    else{
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
        <Navbar.Brand href="#home">Colors</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              tmp_menu.map((menu, id)=>{
                return (
                  menu.subMenu.length == 0 ?
                    <Nav.Link key={id} href={menu.path}> 
                    <div>
                      {menu.icon}
                      {menu.name}
                    </div>
                    </Nav.Link>
                  :
                    <NavDropdown title={menu.name} id="collasible-nav-dropdown">
                      {
                        menu.subMenu.map((subMenu, key)=>{
                          return (
                            <div key={`${key}`}>
                              <NavDropdown.Item  href={subMenu.path}>
                                <>
                                  {subMenu.icon}
                                  {subMenu.name}
                                </>
                                </NavDropdown.Item>
                              {
                                menu.subMenu.length - 1 !== key &&
                                  <NavDropdown.Divider />
                              }
                            </div>
                          )
                        })
                      }
                    </NavDropdown> 
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">{user.email}</Navbar.Brand>
        <Navbar.Brand 
          onClick={()=>{
            localStorage.removeItem('user');
            navigate("/");
          }}
        >Logout</Navbar.Brand>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {
            user.image === "" ?
              <div style={{display: 'flex',height: 100, width: 100, borderRadius: '50%', backgroundColor: 'cyan',alignItems: 'center', justifyContent: 'center'}}>
                <span style={{fontSize: 52}}>
                  { user.email !== null && user.email.charAt(0).toUpperCase()}
                </span>
              </div>
            :
              <img 
                src={user.image !== null && user.image} 
                style={{height: 100, width: 100, borderRadius: '50%'}}
              />
          }
          
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            <div>{user.email}</div>
            <div>
              <Pill 
                  genre={{name: user.role}}
                  key={0} 
                  style={{
                      display: 'flex',
                      borderRadius: 10,
                      backgroundColor: "cyan",
                      alignItems: 'center',
                      justifyContent: 'center',
                      width :100,
                      margin: 10,
                      height: 45,
                      cursor: 'pointer',
                  }}
              />

            <Accordion defaultActiveKey="0">
                {
                  tmp_menu.map((menu, id)=>{
                    return (
                        menu.subMenu.length == 0 ?
                          <Card>
                            <Card.Header>
                              <Nav.Link key={id} href={menu.path}> 
                                {menu.icon} {menu.name}
                              </Nav.Link>
                            </Card.Header>
                          </Card>
                      :
                        <Accordion.Item eventKey={id}>
                          <Accordion.Header>
                            {menu.name}
                          </Accordion.Header>

                          <Accordion.Body>
                            {
                              menu.subMenu.map((subMenu, key)=>{
                                return (
                                  <div key={`${key}`}>
                                    <NavDropdown.Item  href={subMenu.path}>
                                      <>
                                        {subMenu.icon}
                                        {subMenu.name}
                                      </>
                                      </NavDropdown.Item>
                                    {
                                      menu.subMenu.length - 1 !== key &&
                                        <NavDropdown.Divider />
                                    }
                                  </div>
                                )
                              })
                            }
                          </Accordion.Body>
                        </Accordion.Item>
                    )
                  })
                }
              </Accordion>
            </div>
          </>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
    </>
  );
}

export default NavBar;