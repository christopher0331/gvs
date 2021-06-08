import { React } from 'react';
import { Card } from 'react-bootstrap';
import './styles/CardComponent.css';
// import ResidentialFenceImage from './assets/ResidentialFence.jpeg';
// import CommercialFenceImage from './assets/CommercialFence.jpeg';
import { Link } from 'react-router-dom';

const CommercialFenceImage = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Commercial_642.webp";

const CommercialFences = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={CommercialFenceImage} className='cardImage' />
            <Card.Body className='cardBody'>
                <Card.Title>Commercial Fences</Card.Title>
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

export default CommercialFences;