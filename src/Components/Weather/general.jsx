import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function General(props) {
    let { 
        location: {
            name,
            localtime
        }, 
        current: {
            temp_c, 
            condition: {
                icon
            }
        } 
    } = props.weather;

    return (    
        <Row>
            <Col>
                <Col>
                    <span style={{color: '#828893'}}>{name}</span>
                </Col>

                <Col>
                    <span style={{color: '#828893'}}>{temp_c}&deg;C</span>
                </Col>

                <Col>
                    <span style={{color: '#828893'}}>{localtime}</span>
                </Col>
            </Col>
            
            <Col>
                <img src={`${icon}`} />
            </Col>
        </Row>
    )
}

export default General;