import { React } from 'react';
import { Card } from 'react-bootstrap';
import './styles/CardComponent.css';
import { Link } from 'react-router-dom';

const securityFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Security_642.webp";

const BackflowTests = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={securityFence} className='cardImage' />
            <Card.Body className='cardBody'>
                <Card.Title>Backflow Tests</Card.Title>
                <Card.Text>
                    Commercial or residential, we cover all backflow testing needs. Certified from APPB. 
                </Card.Text>
                <Link to="/fencing" >
                    <button className='cardButton'>Learn More</button>{' '}
                </Link>            
            </Card.Body>
        </div>
    )
}

export default BackflowTests;