import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './styles/FeaturedProjects.css';

class Feature2 extends Component {
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
            primaryImage: ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/FullSize/webp+(13).webp", 'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
            allImages: 
            [
                [ "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(1).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(2).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(3).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(4).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(5).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(6).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(7).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],           
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(8).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],          
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(9).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(9).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(10).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(11).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(12).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/3.10.21-RanchRail-Folder/Mobile/webp+(13).webp",'Ranch Rail Fencing, Horse Fencing, 240 linear feet'],
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
                            <h3 className="featuredTitle">Ranch Rail Fencing</h3>
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

export default Feature2;