import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ResidentialFence from './assets/ResidentialFence.jpeg';
import residential2 from './assets/residential2.JPG';
import MetaTags from 'react-meta-tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './styles/FeaturedProjects.css';

class Feature6 extends Component {
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
                            <h3 className="featuredTitle">Feature 6</h3>
                        <div className="primaryImageBox">
                            <img className="primaryImage" src={this.state.primaryImage}/>
                            <FontAwesomeIcon onClick={() => this.changeImagesLeftArrow()} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                            <FontAwesomeIcon onClick={() => this.changeImagesRightArrow()} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
                        </div>
                        <div className="secondaryCarousel">
                            <img onClick={() => this.changePrimary(residential2)} className="secondaryImages" src={residential2}/>
                            <img onClick={() => this.changePrimary(ResidentialFence)}  className="secondaryImages" src={ResidentialFence}/>
                            <img onClick={() => this.changePrimary(residential2)}  className="secondaryImages" src={ResidentialFence}/>
                            <img onClick={() => this.changePrimary(residential2)}  className="secondaryImages" src={ResidentialFence}/>
                            <img onClick={() => this.changePrimary(residential2)}  className="secondaryImages" src={ResidentialFence}/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Feature6;