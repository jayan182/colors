import List from './list';
import Create from './create';
import {useState, useRef, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props){
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Delete
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Do you really want to delete ?</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Yes</Button>
            <Button onClick={props.onHide}>No</Button>
        </Modal.Footer>
        </Modal>
    )
}

function Fruits({props}){
    const [modalShow, setModalShow] = useState(false);
    const [fruitList, setFruitList] = useState([]);
    const [fruits, setFruits] = useState({});
    const [error, setError] = useState({});
    const [fruitEdit, setFruitEdit] = useState([]);
    const [editedKey, setEditedKey] = useState('');

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

        if(Object.values(fruitEdit).length > 0){
            let temp = fruitEdit[0];
            setFruitEdit([{
                ...temp,
                [name]: value
            }]);
        }
        else{
            setFruits(prev_fruit => ({
                ...prev_fruit, 
                [name]: value,
            }));
        }
    }

    const registerFruits = () => {
        if(fruits.length == 0){
            setError({
                "name": "Fruits is Required"
            })
        }
        else{
            if(Object.values(fruitEdit).length === 0){
                setError({});
                setFruits({});
                setFruitList(i => [...i, fruits]);
            }
            else{
                setError({});
                let temp = [];

                fruitList.map((tmp,key)=>{
                    if(key === editedKey){
                        temp.push(fruitEdit[0]);
                    }
                    else{
                        temp.push(tmp);
                    }
                })

                setFruitList(temp);
                setFruitEdit([]);
                setEditedKey('');
            }
        }
    }

    const deleteFruits = (fruit) => {
        //setModalShow(true);
        let index = fruitList.findIndex((tmp)=>{return tmp.name === fruit});

        if(index !== -1){
            let temp_fruits = [...fruitList];
            temp_fruits.splice(index, 1);
            setFruitList(temp_fruits);
        }
    }

    const editFruit = (fruit, key) => {
        let temp_fruit = fruitList.filter((tmp)=>{return tmp.name === fruit});

        setFruitEdit(temp_fruit);
        setEditedKey(key);
    }

    return (
        <div style={styles.container}>
            {
                modalShow &&
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
            }
            <h1>Fruits</h1>

            <div style={styles.bodyContainer}>
                <div style={styles.leftContainer}>
                    <Create 
                        registerFruits={registerFruits} 
                        handleChange={handleChange}
                        error={error}
                        update={fruitEdit}
                        fruits={fruits}
                    />
                </div>

                <div style={styles.rightContainer}>
                    <List 
                        fruits={fruitList}
                        deleteFruit={deleteFruits}
                        edit={editFruit}
                    />
                </div>
            </div>
        </div>
    )
}

export default Fruits;
