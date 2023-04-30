import {useLocation} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardIndex from '../Card/index';
import {useEffect, useState, useContext} from "react";
import { Context } from '../../Components/Reducer/store'

function Index() {
    const [state] = useContext(Context);
    const [path, setPath] = useState([]);
    const location = useLocation();

    useEffect(()=>{
        let tmp = location.pathname.split('/');
        setPath(tmp);
    },[location]);

    return (
        <CardIndex>
            <Breadcrumb>
                {
                    path.length > 0 &&
                        path.map((tmp,key)=>{
                            return (
                                <Breadcrumb.Item href={tmp} key={key}>{tmp}</Breadcrumb.Item>
                            )
                        })
                }
            </Breadcrumb>
            {/* <span>{state.counter}</span> */}
        </CardIndex>
    )
}

export default Index;