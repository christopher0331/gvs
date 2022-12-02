import { React } from 'react';
import { Card } from 'react-bootstrap';
import './styles/CardComponent.css';
// import ResidentialFenceImage from './assets/ResidentialFence.jpeg';
// import CommercialFenceImage from './assets/CommercialFence.jpeg';
import { Link } from 'react-router-dom';

const CommercialFenceImage = "https://ik.imagekit.io/greenviewsolutions/HomePage/SmallSizedWEBP/Commercial_642.webp?tr=w-700,h-700";

const CommercialFences = (props) => {
    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={CommercialFenceImage} className='cardImage' alt="Commercial Chainlink Fencing, 8ft Tall to 16ft tall, and 2600 linear feet"/>
            <Card.Body className='cardBody'>
                <Card.Title><h1 id="CardTitles">Commercial Fences</h1></Card.Title>
                <Card.Text>
                    Schools, businesses or storage units, we've got you covered. 
                </Card.Text>
                    <Link to="/commercial-fences" >
                        <button className='cardButton'>Commercial Fences</button>{' '}
                    </Link>            
                </Card.Body>
        </div>
    )
}

export default CommercialFences;