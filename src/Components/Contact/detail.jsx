import {useState, useEffect} from 'react';
import Card from '../../Common/Wrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Wrapper from '../../Common/Wrapper/index';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useParams } from 'react-router-dom';
import Products from '../../Lib/products';

function Detail(){
    const [products,] = useState(Products);
    let params = useParams();
    const [filtreredProduct, setFilltredProduct] = useState([]);

    useEffect(()=>{
        let temp_product = products.filter((tmp)=>{
            return tmp.name === params.productName;
        });
        setFilltredProduct(temp_product);
    },[]);

    return (
        <Wrapper>
            <Col sm={12} md={4} lg={6}>
                {
                    filtreredProduct.length > 0 && 
                        <Row>
                            <Col>
                                <span>{filtreredProduct[0].name}</span>
                            </Col>
                            
                            <Col>
                                <span>{filtreredProduct[0].description}</span>
                            </Col>
                        </Row>
                }
            </Col>
        </Wrapper>
    )
}

export default Detail;