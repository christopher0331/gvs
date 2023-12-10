import React from 'react';
import { Carousel } from 'react-bootstrap';
import ResidentialFencePhoto from './assets/ResidentialFence.jpeg';
import CommercialFencePhoto from './assets/CommercialFence.jpeg';
import securityFence from './assets/securityFence.JPG';

const Reviews = () => {
    return(
        <div>
            <div className="reviewsTitle">
                Reviews
            </div>
            <div className="reviewsCarousel">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    src={securityFence}
                    alt="First slide"
                    className="carouselImage"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum!.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        src={CommercialFencePhoto}
                        alt="Second slide"
                        className="carouselImage"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={ResidentialFencePhoto}
                        alt="Third slide"
                        className="carouselImage"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Reviews;