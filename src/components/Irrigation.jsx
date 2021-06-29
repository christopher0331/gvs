import { useEffect, React} from 'react';
import './styles/FencingTypes.css';

const Irrigation = (props) => {
    
    const IrrigationImage = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_4.webp";

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

        return(
            <div>
                <div className='title'>
                    Irrigation Services
                </div>
                <div className='info'>(Hover Over Image for Details)</div>
                    <div className="fences">
                        <div className="left">  
                            <div class="project1">
                                <div className="image">
                                <img src={IrrigationImage} alt=''/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Installation<br /></h1>
                                    <p>Lorem ot ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                                </div>
                                </div>
                            </div>
                            <div className='project1Text'>
                            <h3>Irrigation Installation</h3>
                                <p>
                                    Our installation professionals have over 10 years experience installing high quality irrigation systems. We hand select every component to ensure the best system for your specific landscape. 
                                    We stand behind our designs with a full three year coverage warranty. Our trenchless installation method results in the least obtrusive installation possible for your established landscaping. 
                                    In other words….when we finish a job our goal is to leave almost no evidence that we were ever there.
                                </p>
                            </div>
                        </div>     
                        <div className="right"> 
                            <div className='project2Text'>
                                <h3>Seasonal Services</h3>
                                <div>Irrigation blowout, spring irrigation startup</div>
                            </div> 
                            <div class="project2">
                                <div className="image">
                                <img src={IrrigationImage} alt=""/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Different Fences<br /></h1>
                                    <p>Lorem impsum sdfklj need warmer weather, what a great fence! What's import is that this is great!</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="left"> 
                            <div class="project1">
                                <div className="image">
                                <img src={IrrigationImage}/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Wire Fences<br /></h1>
                                    <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                                </div>
                                </div>
                            </div>
                            <div className='project1Text'>
                                <h3>Backflow Testing</h3>
                                <div>Backflow testing information, work with permitting, submitting results, etc.., backflow device installs, backflow device repairs</div>
                            </div> 
                        </div>
                        <div className="right"> 
                            <div className='project2Text'>
                                <h3>WiFi Smart Irrigation Controller</h3>
                                <div>Wifi smart irrigation information, what its good for, the  benefits, and why you should use it.</div>
                            </div> 
                            <div class="project2">
                                <div className="image">
                                <img src={IrrigationImage}/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Wire Fences<br /></h1>
                                    <p>Lorem impsu when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="left"> 
                            <div class="project1">
                                <div className="image">
                                <img src={IrrigationImage}/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Wire Fences<br /></h1>
                                    <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                                </div>
                                </div>
                            </div>
                            <div className='project1Text'>
                                <h3>Assessment and Repair</h3>
                                <div>Assessment and Repair information</div>
                            </div> 
                        </div>
                    </div>
            </div>
        )
    }

export default Irrigation;