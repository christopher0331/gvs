import { React } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IrrigationImage = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Irrigation_642.webp";

const Irrigation = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={IrrigationImage} className='cardImage' />
            <Card.Body className='cardBody'>
                <Card.Title>Irrigation</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to="/irrigation" >
                    <button className='cardButton'>Learn More</button>{' '}
                </Link>            
            </Card.Body>
        </div>
    )
}
export default Irrigation;