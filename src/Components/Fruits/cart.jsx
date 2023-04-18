import Card from 'react-bootstrap/Card';
import FruitCard from '../../Common/Card/fruitCard';

function Cart({cart}) {
    return (
        <Card>
            <div style={{display:'flex',flexDirection: 'row',alignItems: 'center'}}>
            <img 
                src={"data:image/png;base64,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"}
                style={{width:50, height: 50, position: 'relative'}}
            />
            
            <div style={{
                width:20,
                height:20,
                backgroundColor: 'red',
                borderRadius: 50,
                textAlign: 'center',
                position: 'absolute',
                top: -3, left: 43
            }}> 
                <span>
                    {
                        Object.values(cart).length === 0 ?
                            0
                        :
                            Object.values(cart).length
                    }
                </span>
            </div>
            {
                Object.values(cart).length > 0 &&
                    Object.values(cart).map((list, key)=>{
                        return (
                           <FruitCard 
                                id={key}
                                name={list.name}
                                image={list.image}
                           />
                        )
                    })
            }
            </div>
        </Card>
    );
}

export default Cart;