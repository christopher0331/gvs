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
            primaryImage: ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2869.webp",'horizontal stained picket fence, 120 linear feet.'],
            allImages: 
            [
               ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2863.webp",'horizontal stained picket fence, 120 linear feet.'], 
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2864.webp",'horizontal stained picket fence, 120 linear feet.'], 
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2865.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2866.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2867.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2868.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2869.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2871.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2872.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2873.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2876.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2877.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2879.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2880.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2885.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2886.webp",'horizontal stained picket fence, 120 linear feet.'],
                ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/2.28.22-Horizontal-Stained-Pickett/IMG_2887.webp",'horizontal stained picket fence, 120 linear feet.']
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
                    <meta name="description" description="Horizontal Stained Picket Fencign" />
                </MetaTags>
                    <div className="imageSection">
                            <h2 className="featuredTitle">Horizontal Stained Picket Fencing</h2>
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