
function Create({registerFruits, error, handleChange}){
    return (
        <form onSubmit={()=>{registerFruits()}}>
            <label>Fruit Name</label>
            {
                Object.values(error).length > 0 &&
                    <span>{error.name}</span>
            }
           <input
                type="text"
                placeholder="Fruit Name"
                onChange={(e)=>{handleChange(e)}}
            />

            <br />

            <button>
                Register
            </button>
        </form>
    )   
}

export default Create;