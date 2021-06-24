import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './styles/FeaturedProjects.css';

class Feature5 extends Component {
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
            primaryImage: ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_6.webp", '6ft Cedar Picket Fence, Residential Fencing'],
            allImages: [
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_1.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_2.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_3.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_4.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_5.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_6.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_7.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_8.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_9.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_10.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_11.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_12.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_13.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_14.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_15.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_16.webp",'6ft Cedar Picket Fence, Residential Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_17.webp",'6ft Cedar Picket Fence, Residential Fencing']
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
                            <h3 className="featuredTitle">6ft Cedar Picket Fence</h3>
                        <div className="primaryImageBox">
                            <img className="primaryImage" src={this.state.primaryImage[0]} alt={this.state.primaryImage[1] }/>
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

export default Feature5;