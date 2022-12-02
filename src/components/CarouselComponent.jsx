import { Suspense, lazy, React, Component }  from 'react';
import { Carousel, Button } from 'react-bootstrap'
import './styles/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = "https://ik.imagekit.io/greenviewsolutions/HomePage/CustomPicketCarousel.JPG";
const Image2 = "https://ik.imagekit.io/greenviewsolutions/HomePage/HorizontalCedarStainedCarousel.JPG";
const Image3 = "https://ik.imagekit.io/greenviewsolutions/HomePage/PicketWithDecorationCarousel.JPG";

class CarouselComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []

        }
    }

    componentDidMount() {
        this.setState({
            images: [Image, Image2, Image3]
        })
    }

    render(){
        return(
            <div>
                <Suspense>
                <Carousel id="carousel-css">
                    <Carousel.Item interval={2000} className="carousel-item">
                        <img
                        className="d-block w-100 carouselImage"
                        rel="preload"
                        src={Image}
                        alt="First slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a phatra augue mollis interdum.</p>
                        <Button variant="outline-success">Learn More</Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className="carousel-item">
                        <img
                        className="d-block w-100 carouselImage"
                        src={Image2}
                        alt="Second slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="outline-success">Learn More</Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className="carousel-item">
                        <img
                        className="d-block w-100 carouselImage"
                        src={Image3}
                        alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant="outline-success">Learn More</Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Suspense>
            </div>
        )
    }
};

export default CarouselComponent;