import { useEffect, React, lazy } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import ImagesMapped from './ImagesMapped.jsx';
import ImagesMappedSmall from './ImagesMappedSmall.jsx';
import { MetaTags, ReactTitle } from 'react-meta-tags';

const Irrigation = lazy(() => import('./IrrigationProject.jsx'));
const CommercialFences = lazy(() => import('./CommercialFences.jsx'));
const BackflowTests = lazy(() => import('./BackflowTests.jsx'));
const ResidentialFences = lazy(() => import('./ResidentialFences.jsx'));
const Information = lazy(() => import('./Information.jsx'));
const Project = lazy(() => import('./Projects.jsx'));

const HomePage = (props) => {
   
    const innerWidth = window.innerWidth;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      if(innerWidth < 684){
        return  (
            <div>
                <MetaTags>
                    <meta name="description" 
                    content="GreenView Solutions is the most trusted name in Denver, CO 
                                for wood fencing, chain link fencing, wrought iron fencing 
                                and commercial fencing! Call us at 3030.358.8168 and get 
                                placed on our calendar today! We've got 5 star reviews 
                                everywhere you can find us. GreenView Solutions also 
                                has certified irrigation 
                                experts that can install irrigation systems, or test your 
                                backflow devices. We serve the greater Denver 
                                area, including Longmont CO, Erie CO, Arvada CO, 
                                Frederick CO, and others." />
                </MetaTags>
                <ReactTitle title="GreenView Solutions"/>
                <div className="ImagesMappesBox">
                   <ImagesMappedSmall />
                </div>
                <div className="FirstHomepageBox">
                    <h5 id="BoxText">Quality, Communication and Commitment Every Fence</h5>
                    <Link to="contact-us">
                        <button className="buttonDivSmall">Contact Us</button>
                    </Link>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div> 
                <div className="mediaBreak900">
                    <div>
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                    </div>
                    <div>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                    </div>
                </div>
                <div className="mediaBreak500">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div>       
                <div>
                    <Information />
                </div>
                <div>
                    <Project changePage={props.changePage}/>
                </div>
            </div>
        
            )       
      } else {
        return(
            <div>
                <MetaTags>
                    <meta name="description" content="GreenView Solutions is the most trusted name in Denver, CO for wood fencing, chain link fencing, wrought iron fencing and commercial fencing! Call us at 3030.358.8168 and get placed on our calendar today!" />
                </MetaTags>

                <div className="ImagesMappesBox">
                   <ImagesMapped />
                </div>
                <div className="FirstHomepageBox">
                    <h5 id="BoxText">Quality, Communication and Commitment Every Fence</h5>
                    <Link to="contact-us">
                        <button className="buttonDivLarge">Contact Us</button>
                    </Link>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div> 
                <div className="mediaBreak900">
                    <div>
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                    </div>
                    <div>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                    </div>
                </div>
                <div className="mediaBreak500">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div>       
                <div>
                    <Information />
                </div>
                <div>
                    <Project changePage={props.changePage}/>
                </div>
                {/* <div>
                    We Serve the Following Areas: 

                </div> */}
            </div>
        
        )
    } 
        
}

export default HomePage;