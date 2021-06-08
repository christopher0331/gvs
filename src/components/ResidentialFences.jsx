import { React } from 'react';
import { Card } from 'react-bootstrap';
import './styles/CardComponent.css';
import { Link } from 'react-router-dom';


const ResidnetialFence_300 = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"

const ResidentialFences = (props) => {

    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={ResidnetialFence_300} className='cardImage' />
            <Card.Body className='cardBody'>
                <Card.Title className="cardTitle">Residential Fences</Card.Title>
                <Card.Text className="cardText">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Link to="/fencing" >
                    <button className='cardButton'>Learn More</button>{' '}
                </Link>
                
            </Card.Body>
        </div>
    )
}

export default ResidentialFences;