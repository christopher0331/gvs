import { useEffect, React} from 'react';
import BackflowTests from './BackflowTests';
import './styles/FencingTypes.css';

const Irrigation = (props) => {
    
    const IrrigationImage = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Irrigation_642.webp";
    const SeasonalImages = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Irrigation/pexels-anon-754276.jpg";
    const BackFlowTests = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/Backflow_Testing_Device.webp";
    const RainBirdWifiController = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Irrigation/Rainbird+WiFi+Controller.jpeg";
    const IrrigationRepairs = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Irrigation/IrrigationRepairs.jpeg";

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
                                    <p></p>
                                </div>
                                </div>
                            </div>
                            <div className='project1Text'>
                            <h3>Irrigation Installation</h3>
                                <p>
                                    Our installation professionals have over 10 years experience installing high quality 
                                    irrigation systems. We hand select every component to ensure the best system for your specific landscape. 
                                    We stand behind our designs with a full three year coverage warranty. Our trenchless installation 
                                    method results in the least obtrusive installation possible for your established landscaping. 
                                    In other words….when we finish a job our goal is to leave almost no evidence that we were ever there.
                                </p>
                            </div>
                        </div>     
                        <div className="right"> 
                            <div className='project2Text'>
                                <h3>Seasonal Services</h3>
                                <p>
                                    Every season comes with maitenance for your irrigation system, and we
                                    we handle your irrigation needs year round. From winterization sprinkler blowouts, 
                                    to sprinkler start-up. And if you happen to have forgot to winterize your system and 
                                    find yourself with a blow out in the spring. We have licensed irrigation experts
                                    to take care of any project. 
                                </p>
                            </div> 
                            <div class="project2">
                                <div className="image">
                                <img src={SeasonalImages} alt=""/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Seasonal Services<br /></h1>
                                    <p>
                                        
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="left"> 
                            <div class="project1">
                                <div className="image">
                                <img src={BackFlowTests} alt=""/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Backflow Testing<br /></h1>
                                    <p></p>
                                </div>
                                </div>
                            </div>
                            <div className='project1Text'>
                                <h3>Backflow Testing</h3>
                                <p>
                                    Backflow devices are critical for keeping our public water supply clean and potable. In order
                                    to keep our water clean it is required by the state to have our devices tested each and every year. 
                                    We have certified irrigation experts that will handle all your backflow needs. If your device neeeds to
                                    be tested, replaced or repaired, we will get the job done and submit all neccessay information to the state!
                                </p>
                            </div> 
                        </div>
                        <div className="right"> 
                            <div className='project2Text'>
                                <h3>WiFi Smart Irrigation Controller</h3>
                                <p> 
                                    The beautiful thing about technology is  all the ways in which we get it to work for us. With a 
                                    WiFi Smart Irrigation Controller you can take all the guessing out of when and how long you need to 
                                    run your irrigation system, completely eliminating wasted water. Using ground saturation sensors 
                                    and the ability for both the customer and our techincians to turn on and off these systems with a 
                                    simple phone application. 
                                </p>
                            </div> 
                            <div class="project2">
                                <div className="image">
                                <img src={RainBirdWifiController} alt=""/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>WiFi Smart Irrigation Controller<br /></h1>
                                    <p>
                                       
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="left"> 
                            <div class="project1">
                                <div className="image">
                                <img src={IrrigationRepairs} alt=""/>
                                </div>
                                <div className="details">
                                <div className="center">
                                    <h1>Assessment and Repair<br /></h1>
                                    <p>
                                       
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className='project1Text'>
                                <h3>Assessment and Repair</h3>
                                <p>
                                    Our irrigation experts have decades of experience. Regarding irrigation, assessing the problem properly
                                    can save you time and money. Like any problem, a proper diagnosis is the most important aspect of problem
                                    solving, and usually done best by seasoned experts. If you've got a large puddle in the middle of your 
                                    yard, it could be a grading issue, a busted irrigation pipe, or a misplaced sprinkler, whatever the case, 
                                    call GreenView Solutions to get it resolved quick and affordably. 
                                </p>
                            </div> 
                        </div>
                    </div>
            </div>
        )
    }

export default Irrigation;