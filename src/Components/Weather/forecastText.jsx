import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometer, faWind, faDroplet } from '@fortawesome/free-solid-svg-icons'

function ForeCastText(props) {
    let { 
        current: {
            feelslike_c, 
            uv,
            wind_kph,
            humidity    
        } 
    } = props.weather;

    return (    
        <Row>
            <span style={{color: '#828893'}}>AIR CONDITION</span>
            <Col>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faThermometer} color='#828893'/>
                    </Col>

                    <Col>
                        <Col>
                            <span style={{color: '#828893'}}>Real Feel</span>
                        </Col>

                        <Col>
                            <span style={{color: '#828893'}}>{feelslike_c}&deg;C</span>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faWind} color='#828893' />
                    </Col>

                    <Col>
                        <Col>
                            <span style={{color: '#828893'}}>Wind</span>
                        </Col>

                        <Col>
                            <span style={{color: '#828893'}}>{wind_kph} Km/h</span>
                        </Col>
                    </Col>
                </Row>
            </Col>
            
            <Col>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faDroplet} color='#828893'/>
                    </Col>

                    <Col>
                        <Col>
                            <span style={{color: '#828893'}}>Humidity</span>
                        </Col>

                        <Col>
                            <span style={{color: '#828893'}}>{humidity} %</span>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faWind} color='#828893' />
                    </Col>

                    <Col>
                        <Col>
                            <span style={{color: '#828893'}}>UV Index</span>
                        </Col>

                        <Col>
                            <span style={{color: '#828893'}}>{uv}</span>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ForeCastText;