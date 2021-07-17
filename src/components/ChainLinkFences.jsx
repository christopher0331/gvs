import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const ChainLinkFences = () => {

    const ChainLinkFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/3.1.21-Chainlink-Fence/Mobile/webp+(3).webp";

    return(
        <div>
            <div>
                <h1 className='title'>Chain Link Fences for Your Denver, CO Property</h1>
            </div>
            <div className="woodFencesParagraph">
                <h2>We Build and Install Chain Link Fences</h2>
                <p>
                    If you’re looking for seasoned contractors to bring and build a beautiful chain link fenc
                    to your Denver, CO property, GreenView Solutions is the team to call! 
                    We're dedicated and consistent in delivering the best and nothing less. 
                    Whether you come to us for residential chain link fencing or commercial ornamental iron fencing, we 
                    utilize our skills and knowledge to turn quality materials into lasting 
                    statements for your property. We’ve installed fences for thousands 
                    of clients and performed impeccable work for homes and businesses around Denver, CO 
                    and we would love to help you as well!
                </p>

                <h3>Chain Link Options for Your Denver, CO Property</h3>
                <p>
                    Chain link fences are an economical option that comes in a variety of 
                    colors to enhance your Denver, CO property. Any request our client make we do everything 
                    in our power to bring your ideas to fruition and leave you feeling like you got more than
                    you paid for. As a leading fence company, we have great partnerships with
                    local suppliers that allow us to keep the prices stable and variety wide, 
                    with various post types available to suit your needs and preferences. Additionally, 
                    if you need a gate to go with your new fence, don’t sweat it. We keep different types, 
                    styles, and sizes of gates in our inventory, and we craft custom gates upon request. We can 
                    also provide privacy slats in a variety of colors.
                </p>
            </div>
            <div className='info'>(Hover Over Image for Details)</div>
                <div className="fences">
                    <div className="left">  
                        <div className="project1">
                            <div className="image">
                                <img src={ChainLinkFence} id="residential1" alt='Chain link fence, 8ft tall to 16ft tall, 2000 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Chain Link Fence<br /></h1>
                                <p>Average Cost: $27 per linear foot.</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Chain Link Fence</h2>
                            <div>
                                Chain link fences are very popular for residential areas with a preference for 
                                openess but want to maintain a classy and durable look. One of the best traits
                                of chainlink fence is their durability with little to no upkeep. While wood fences
                                need to be clear coated or stained every few years to last decades, chain link fences
                                need no special care to maintain their intergrity. Don't like the metal look? Fear not!
                                We have a variety of chain link colors to choose from!
                            </div>
                        </div>
                    </div>     
                </div>
        </div>
    )
}

export default ChainLinkFences;