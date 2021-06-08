import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ResidentialFence from './assets/ResidentialFence.jpeg';
import residential2 from './assets/residential2.JPG';
import MetaTags from 'react-meta-tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './styles/FeaturedProjects.css';

class Feature5 extends Component {
    constructor(props){
        super(props)

        this.state = {
            primaryImage: ResidentialFence,
            allImages: [residential2, ResidentialFence],
            imageIndex: 0
        }
        this.changePrimary = this.changePrimary.bind(this);
        this.changeImagesRightArrow = this.changeImagesRightArrow.bind(this);
        this.changeImagesLeftArrow = this.changeImagesLeftArrow.bind(this);

    }

    componentDidMount(){
        this.setState({
            primaryImage: "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_18.webp",
            allImages: [
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_2.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_3.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_4.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_5.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_6.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_8.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_9.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_10.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_11.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_12.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_13.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_14.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_15.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_16.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_17.webp",
                "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_18.webp"
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
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="MyApp" />
                </MetaTags>
                    <div className="imageSection">
                            <h3 className="featuredTitle">Feature 5</h3>
                        <div className="primaryImageBox">
                            <img className="primaryImage" src={this.state.primaryImage}/>
                            <FontAwesomeIcon onClick={() => this.changeImagesLeftArrow()} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                            <FontAwesomeIcon onClick={() => this.changeImagesRightArrow()} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
                        </div>
                        <div>
                            <div className="secondaryCarousel">
                                {this.state.allImages.map(image => (
                                    <img onClick={() => this.changePrimary(image)} className="secondaryImages" src={image}/>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Feature5;