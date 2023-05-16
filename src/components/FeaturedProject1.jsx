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
        const { images } = this.props;

        this.setState({
            primaryImage: images[0],
            allImages: images,
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
                primaryImage: this.state.allImages[0]
            })
        } else {
            this.setState((prevState) => ({
                imageIndex: prevState.imageIndex + 1,
                primaryImage: this.state.allImages[prevState.imageIndex + 1]
            }))
        }
    }

    changeImagesLeftArrow(){
        if(this.state.imageIndex === 0){
            this.setState({
                imageIndex: this.state.allImages.length - 1,
                primaryImage: this.state.allImages[this.state.allImages.length - 1]
            })
        } else {
            this.setState((prevState) => ({
                imageIndex: prevState.imageIndex - 1,
                primaryImage: this.state.allImages[prevState.imageIndex - 1]
            }))
        }
    }

    render(){
        const { projectNumber } = this.props;
        
        return(
            <div>
                <MetaTags>
                    <meta name="description" description={`Project ${projectNumber}`} />
                </MetaTags>
                    <div className="imageSection">
                            <h2 className="featuredTitle">{projectNumber}</h2>
                            
                        <div className="primaryImageBox">
                        <img className="primaryImage" src={this.state.primaryImage} alt={this.state.primaryImage} />
                        <FontAwesomeIcon onClick={this.changeImagesLeftArrow} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                        <FontAwesomeIcon onClick={this.changeImagesRightArrow} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
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

