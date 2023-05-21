interface ParamsInterface {
    cityChange() : {},
    searchCity() : {},
    weather: weatherInterface
}

interface weatherInterface{
    current : sdfdksjf
}

function Search(props: ParamsInterface) {
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