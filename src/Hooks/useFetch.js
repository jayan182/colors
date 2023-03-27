import {useState, useEffect} from 'react';
import axios from "axios";

const useFetch = (url) => {
    const [dataFromApi, setDataFromApi] = useState();

    useEffect(()=>{
        getData();
    },[url]);

    const getData = async() => {
        await axios.get(url).then((res)=>{
            setDataFromApi(res.data);
        });
    }
    
    return dataFromApi;
}

export  {useFetch};