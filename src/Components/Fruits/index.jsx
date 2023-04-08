import List from './list';
import Create from './create';
import {useState} from 'react';

function Fruits(){
    const [fruitList, setFruitList] = useState([]);
    const [fruits, setFruits] = useState([]);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setError({});
        setFruits(e.target.value);
    }

    const registerFruits = () => {
        if(fruits.length == 0){
            setError({
                "name": "Fruits is Required"
            })
        }
        else{
            setFruitList([fruits]);
        }
    }

    return (
        <div style={{height:'100%', width: '100%', 
        alignItems: 'center', justifyContent: 'center'}}>
            <h1>Fruits</h1>

            <div style={{display: 'flex', flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'}}>
                <div style={{flex: 1, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'}}>
                    <Create 
                        registerFruits={registerFruits} 
                        handleChange={handleChange}
                        error={error}
                    />
                </div>

                <div style={{flex: 1, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'}}>
                    <List fruits={fruitList}></List>
                </div>
            </div>
        </div>
    )
}

export default Fruits;