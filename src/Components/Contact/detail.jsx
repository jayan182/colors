import {useState, useEffect} from 'react';
import Card from '../../Common/Wrapper';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Wrapper from '../../Common/Wrapper/index';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useParams } from 'react-router-dom';

function Detail(){
    let params = useParams();

    console.log("params",params.productName)
    return (
        <Wrapper>
            <Col sm={12} md={4} lg={6}>
                <span></span>
            </Col>
        </Wrapper>
    )
}

export default Detail;