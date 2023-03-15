import { Outlet } from "react-router-dom"
import {useState} from "react";
import NavBar from '../Common/Nav/index';

function Contacts() {
    const [currentUser, ] = useState("123123123123123");
    return (
      <div>
        <NavBar />
        <h1>This is the Contacts page</h1>
        <Outlet context={[currentUser]} />
      </div>
    );
}
  
export default Contacts;