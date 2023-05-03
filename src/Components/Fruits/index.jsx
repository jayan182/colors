import List from './list';
import Create from './create';
import {useContext, useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import Cart from './cart';
import {FruitContext} from '../../Context/fruitContext';
import {action} from './actionTypes';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from "../../Common/Wrapper";

function Fruits(props){
    console.log("props",props);
    const [state, dispatch] = useContext(FruitContext);

    let { 
        toast,
        message,
    } = state;

    const [toastData,] = useState(toast);
    
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

    const displayToast = () => {
        return (
            <ToastContainer
                position="bottom-end"
            >
                <Toast 
                    bg="success"
                    onClose={() => {
                        dispatch({
                           type: action.SET_UNSET_TOAST
                        });
                    }} 
                    show={toastData} 
                    delay={5000} 
                    autohide
                >
                    <Toast.Body>
                        <span style={{color: 'white'}}>
                            {message}
                        </span>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }

    return (
        <Wrapper>
            <div style={styles.container}>
                {
                    toastData &&
                        displayToast()
                }

                <Cart />

                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <Create />
                        </Col>

                        <Col xs={12} md={6} ld={6}>
                            <List />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Wrapper>
    )
}

export default Fruits;
