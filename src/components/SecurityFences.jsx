import { React } from 'react';
import { Card } from 'react-bootstrap';
import './styles/CardComponent.css';
import { Link } from 'react-router-dom';

const securityFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Security_642.webp";

const SecurityFences = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={securityFence} className='cardImage' />
            <Card.Body className='cardBody'>
                <Card.Title>Security Fences</Card.Title>
                <Card.Text>
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

export default SecurityFences;