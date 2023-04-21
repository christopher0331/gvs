import React, {Component} from 'react';
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

        const projectOneImageArray = [];

        for(let i = 1; i < 19; i++){
            projectOneImageArray.push([`https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project2/picture${i}?tr=w-700,h-700`, "custom horizontal fence, 300 linear feet"]);
        }

        this.setState({
            primaryImage: [`https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project2/picture1?tr=w-700,h-700`, "custom horizontal fence, 300 linear feet"],
            allImages: projectOneImageArray,
        })
    }

    changePrimary(target){
        this.setState({
            primaryImage: target
        })
    }

    changeImagesRightArrow(){
        const { images } = this.props;
        if(this.state.imageIndex === images.length - 1){
            this.setState({
                imageIndex: 0,
                primaryImage: images[this.state.imageIndex]
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex + 1,
                primaryImage: images[this.state.imageIndex]
            })
        }
    }

    changeImagesLeftArrow(){
        const { images } = this.props;
        if(this.state.imageIndex === 0){
            this.setState({
                imageIndex: 1,
                primaryImage: images[this.state.imageIndex]
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex - 1,
                primaryImage: images[this.state.imageIndex]
            })
        }
    }

    render(){
        const { projectNumber, images } = this.props;
        
        return(
            <div>
                <MetaTags>
                    <meta name="description" description={`Project ${projectNumber}`} />
                </MetaTags>
                    <div className="imageSection">
                            <h2 className="featuredTitle">{projectNumber}</h2>
                            
                        <div className="primaryImageBox">
                        <img className="primaryImage" src={this.state.primaryImage} alt={this.state.primaryImage} />
                        <FontAwesomeIcon onClick={() => this.changeImagesLeftArrow()} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                        <FontAwesomeIcon onClick={() => this.changeImagesRightArrow()} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
                    </div>
                    <div>
                        <div className="secondaryCarousel">                            
                            {this.state.allImages.map(image => (
                                <img onClick={() => this.changePrimary(image)} className="secondaryImages" src={image} alt={image}/>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}
}

export default Feature1;
