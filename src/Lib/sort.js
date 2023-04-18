const Sort = (offset, param) =>{
    return offset.sort((a,b)=>{return (a[param] < b[param]) ? 1 : -1});
}

export default Sort;