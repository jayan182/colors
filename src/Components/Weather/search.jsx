function Search({cityChange, searchCity}) {
    return (
        <div>
            <input 
                type="text"
                placeholder={"Search for City"}
                onChange={(e)=>{cityChange(e)}}
            />
            <button onClick={()=>{searchCity()}}>Search</button>
        </div>
    )
}   

export default Search;  