import { useParams, Outlet } from "react-router-dom";
function Contact() {
    let params = useParams();
    
    return (
        <div>
            <h1>{params.postId}</h1>
            {/* <Outlet /> */}
        </div>
    );
    
}
  
export default Contact;