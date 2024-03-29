import { useEffect, React, lazy } from 'react';
import './styles/HomePage.css';
import ImagesMapped from './ImagesMapped.jsx';
import ImagesMappedSmall from './ImagesMappedSmall.jsx';
import { MetaTags, ReactTitle } from 'react-meta-tags';
import ChatGPT from './ChatGPT.jsx';

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

            
        // Initialize GTM dataLayer
        window.dataLayer = window.dataLayer || [];

        // Define gtag function
        function gtag() {
            window.dataLayer.push(arguments);
        }

        // Load GTM script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11428060127';
        script.async = true;
        document.body.appendChild(script);

        // Execute the GTM script
        script.onload = () => {
            gtag('js', new Date());
            gtag('config', 'AW-11428060127');
        };

        // Clean up
        return () => {
            document.body.removeChild(script);
        };

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
                                    backflow devices."
                            keywords="fencing, irrigation, backflow testing"
                        />
                </MetaTags>
                <ReactTitle title="GreenView Solutions"/>

                <div className="ImagesMappesBox">
                   <ImagesMappedSmall />
                </div>
                <div className="FirstHomepageBox">
                    <div>
                    <h5 id="BoxText">Quality, Communication and Commitment On Every Project</h5>
                    <h5 id="BoxText2">We're Proud to Announce We Now Offer Financing Options!</h5>

                        <a class="financeAnchor" href="https://www.ffcapplication.com/?i=XY5sWUYH644gfJ4gujgeBam42nEvNGIYEC5wDNmMe9o=" target='_blank'>
                            <button class="buttonDivSmallFinance"> Finance Now </button>
                        </a>
                    </div>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
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
                                    Frederick CO, and others." 
                        />
                </MetaTags>
                <ReactTitle title="GreenView Solutions"/>
                <div className="ImagesMappesBox">
                   <ImagesMapped />
                </div>

                <div className="FirstHomepageBox">
                    <div>
                    <h5 id="BoxText">Quality, Communication and Commitment On Every Project</h5>

                    <h5 id="BoxText2">We're Proud to Announce We Now Offer Financing Options!!</h5>

                        <a class="financeAnchor" href="https://www.ffcapplication.com/?i=XY5sWUYH644gfJ4gujgeBam42nEvNGIYEC5wDNmMe9o=" target='_blank'>
                            <button class="buttonDivLargeFinance"> Finance Now </button>
                        </a>
                    </div>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
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
