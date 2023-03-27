import Wrapper from '../Common/Wrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardsList from '../Lib/cards';
import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Sort from '../Lib/sort';
import UserContext  from '../Providers/userProvider';

function Home() {
  var product = useContext(UserContext);
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState(product);
  const [hoveredCard, setHoveredCard] = useState('');

  useEffect(()=>{
    let temp_products = Sort(products, "name");
    setProducts(temp_products);
  },[]);

  return (
    <>
      <Wrapper>
      <button onClick={()=>{setCounter(counter + 1)}}>+</button>
        <Row className="gap-3 p-5" xs={1} md={2} lg={6}>
          {
            CardsList.map((card,key)=>{
              return(
                <Card 
                  key={key} 
                  style={{textAlign: 'center'}}
                  onMouseOver={()=>{
                    setHoveredCard(key);
                  }}
                  onMouseOut={()=>{
                    setHoveredCard('');
                  }}

                >
                  {
                    key === hoveredCard ?
                      <Card.Body className="p-0" style={{backgroundColor: card.backgroundColor,alignItems:'center',justifyContent:'center',flex:1}}>
                        <Card.Text style={{color: card.actionColor}}>
                          {card.action}
                        </Card.Text>
                      </Card.Body>
                    :
                      <Card.Body>
                        <Card.Header style={{backgroundColor: 'white'}}>{card.icon}</Card.Header>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>
                          {card.title}
                        </Card.Text>
                      </Card.Body>
                  }
                </Card>
              )
            })
          }
        </Row>

        <Row>
          <ul>
          {
            products.map((product,key)=>{
              return (
                <ol key={key}>
                  <Link to={`${product.name}/detail`}>{product.name}</Link>
                </ol>
              )
            })
          }
          </ul>
        </Row>
      </Wrapper>
    </>
  );
}

export default Home;