import Card from 'react-bootstrap/Card';

function CardIndex({children}){
    return (
        <Card body className="ps-5">
            {children}
        </Card>
    )
}
export default CardIndex;