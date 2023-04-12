
function Create({registerFruits, error, handleChange}){
    return (
        <>
            <label>Fruit Name</label>
            {
                Object.values(error).length > 0 &&
                    <span>{error.name}</span>
            }
            <input
                name="image"
                type="text"
                placeholder="Fruit Image"
                onChange={(e)=>{handleChange(e)}}
            />
           <input
                name="name"
                type="text"
                placeholder="Fruit Name"
                onChange={(e)=>{handleChange(e)}}
            />

            <br />

            <button onClick={(e)=>{registerFruits(e)}}>
                Register
            </button>
        </>
    )   
}

export default Create;