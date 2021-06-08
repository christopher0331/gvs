import { useEffect, React, lazy } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import ImagesMapped from './ImagesMapped.jsx';
import ImagesMappedSmall from './ImagesMappedSmall.jsx';

const Irrigation = lazy(() => import('./IrrigationProject.jsx'));
const CommercialFences = lazy(() => import('./CommercialFences.jsx'));
const SecurityFences = lazy(() => import('./SecurityFences.jsx'));
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
                <div className="ImagesMappesBox">
                   <ImagesMappedSmall />
                </div>
                <div className="FirstHomepageBox">
                    <h5 id="BoxText">Quality, Communication and Commitment Every Fence</h5>
                    <Link to="contact-us">
                        <Button style={{marginLeft: '15px'}} variant="outline-success">Contact Us</Button>{' '}
                    </Link>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <SecurityFences changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div> 
                <div className="mediaBreak900">
                    <div>
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                    </div>
                    <div>
                        <SecurityFences changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                    </div>
                </div>
                <div className="mediaBreak500">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <SecurityFences changePage={props.changePage}/>
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
                <div className="ImagesMappesBox">
                   <ImagesMapped />
                </div>
                <div className="FirstHomepageBox">
                    <h5 id="BoxText">Quality, Communication and Commitment Every Fence</h5>
                    <Link to="contact-us">
                        <Button style={{marginLeft: '15px'}} variant="outline-success">Contact Us</Button>{' '}
                    </Link>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <SecurityFences changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div> 
                <div className="mediaBreak900">
                    <div>
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                    </div>
                    <div>
                        <SecurityFences changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                    </div>
                </div>
                <div className="mediaBreak500">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <SecurityFences changePage={props.changePage}/>
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
    } 
        
}

export default HomePage;