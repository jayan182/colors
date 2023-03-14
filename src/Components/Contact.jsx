import { useParams, Outlet } from "react-router-dom";
import NavBar from '../Common/Nav/index';
function Contact() {
    let params = useParams();

    return (
        <div>
            <NavBar />
            <h1>{params.postId}</h1>
            <Outlet />
        </div>
    );
    
}
  
export default Contact;