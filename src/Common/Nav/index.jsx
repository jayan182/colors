import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import menus from '../../Lib/menu'; 
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("user"));
    setUser(data.email);
  },[]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Colors</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              menus.map((menu, id)=>{
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
        <Navbar.Brand href="#home">{user}</Navbar.Brand>
        <Navbar.Brand 
          onClick={()=>{
            localStorage.removeItem('user');
            navigate("/");
          }}
        >Logout</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;