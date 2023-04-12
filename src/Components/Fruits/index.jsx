import List from './list';
import Create from './create';
import {useState, useRef, useEffect} from 'react';

function Fruits(){
    const [fruitList, setFruitList] = useState([]);
    const [fruits, setFruits] = useState({});
    const [error, setError] = useState({});

    const styles = {
        container: {
            height: '100%', 
            width: '100%', 
            alignItems: 'center', 
            justifyContent: 'center',
        },
        bodyContainer: {
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'center'
        },
        leftContainer: {
            flex: 1, 
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'center'
        },
        rightContainer: {
            flex: 1, 
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'center'
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFruits(prev_fruit => ({...prev_fruit, [name]: value}));
    }

    const registerFruits = () => {
        if(fruits.length == 0){
            setError({
                "name": "Fruits is Required"
            })
        }
        else{
            setError({});
            setFruitList(i => [...i, fruits]);
        }
    }

    const deleteFruits = (fruit) => {
        let index = fruitList.findIndex((tmp)=>{return tmp.name === fruit});

        if(index !== -1){
            let temp_fruits = [...fruitList];
            temp_fruits.splice(index, 1);
            setFruitList(temp_fruits);
        }
    }

    return (
        <div style={styles.container}>
            <h1>Fruits</h1>

            <div style={styles.bodyContainer}>
                <div style={styles.leftContainer}>
                    <Create 
                        registerFruits={registerFruits} 
                        handleChange={handleChange}
                        error={error}
                    />
                </div>

                <div style={styles.rightContainer}>
                    <List 
                        fruits={fruitList}
                        deleteFruit={deleteFruits}
                    />
                </div>
            </div>
        </div>
    )
}

export default Fruits;

