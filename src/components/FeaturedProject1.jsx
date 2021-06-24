import React, {Component} from 'react';
// import ResidentialFence from './assets/ResidentialFence.jpeg';
// import residential2 from './assets/residential2.JPG';
import MetaTags from 'react-meta-tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './styles/FeaturedProjects.css';

class Feature1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            primaryImage: "",
            allImages: [],
            imageIndex: 0
        }

        this.changePrimary = this.changePrimary.bind(this);
        this.changeImagesRightArrow = this.changeImagesRightArrow.bind(this);
        this.changeImagesLeftArrow = this.changeImagesLeftArrow.bind(this);
    }

    componentDidMount(){
        this.setState({
            primaryImage: ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/FullSize/DecorativeIronFence_642+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet'],
            allImages: 
            [
               ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/Mobile/DecorativeIronFence_642+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet'], 
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/Mobile/DecorativeIronFence_642_2+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet'], 
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/Mobile/DecorativeIronFence_642_3+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/Mobile/DecorativeIronFence_642_4+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/Mobile/DecorativeIronFence_642_5+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/Mobile/DecorativeIronFence_642_6+(1).webp",'Decorative iron fencing, wrought iron fencing, 4ft tall, 80 linear feet']
            ]
        })
    }

    changePrimary(target){
        this.setState({
            primaryImage: target
        })
    }

    changeImagesRightArrow(){
        if(this.state.imageIndex === this.state.allImages.length - 1){
            this.setState({
                imageIndex: 0,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex + 1,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        }
    }

    changeImagesLeftArrow(){
        if(this.state.imageIndex === 0){
            this.setState({
                imageIndex: 1,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex - 1,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        }
    }

    render(){
        return(
            <div>
                <MetaTags>
                    <meta name="description" description="Wrought Iron Fencing, Ornamental Iron Fencing Project" />
                </MetaTags>
                    <div className="imageSection">
                            <h2 className="featuredTitle">Wrought Iron Fencing</h2>
                        <div className="primaryImageBox">
                            <img className="primaryImage" src={this.state.primaryImage[0]} alt={this.state.primaryImage[1]} />
                            <FontAwesomeIcon onClick={() => this.changeImagesLeftArrow()} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                            <FontAwesomeIcon onClick={() => this.changeImagesRightArrow()} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
                        </div>
                        <div>
                            <div className="secondaryCarousel">
                                {this.state.allImages.map(image => (
                                    <img onClick={() => this.changePrimary(image)} className="secondaryImages" src={image[0]} alt={image[1]}/>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Feature1;