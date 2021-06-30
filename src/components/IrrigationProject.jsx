import { React } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IrrigationImage = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Irrigation_642.webp";

const Irrigation = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={IrrigationImage} className='cardImage' alt='Hunter MP Rotor with 6 inch pop up-head for Irrigation' />
            <Card.Body className='cardBody'>
                <Card.Title>Irrigation</Card.Title>
                <Card.Text>
                    Irrigation system installs, repairs or upgrades, our team can bring quality water control to your property.
                </Card.Text>
                <Link to="/irrigation" >
                    <button className='cardButton'>Irrigation Services</button>{' '}
                </Link>            
            </Card.Body>
        </div>
    )
}
export default Irrigation;