import menus from "../Lib/menu";
import clientMenues from "../Lib/clientMenu";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function PermittedRoute({children,props}){
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(()=>{
        let menu = user ? user?.role === "Admin" ? menus : clientMenues : menus;

        let search = menu.filter((tmp)=>{
            return tmp.path === location.pathname
        });

        console.log("location",location);
        console.log("search",search);
        console.log("emnu",menu);

        if(search.length > 0){
            if(search[0].permissions.includes(user.role)){
            
            }
        }
        else{
            alert("No permission");
            navigate("/home");
        }
        setUser(user);
    },[props, location]);

    return (
        <>
            {children}
        </>
    );
}

export default PermittedRoute;