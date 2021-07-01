import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const ChainLinkFences = () => {

    const HorizontalPrivacy = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"
    const wireFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Security_642.webp";
    const PremiumPicket = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/11.14.20-PremiumPicket/Mobile/PremiumPicket14.webp";
    const PrivacyFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_4.webp";
    const RanchRail = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/10.30.20-RanchRail/Mobile/10.30.20-RanchRail21.webp";
    const SplitRail = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/SplitRail/Mobile/SplitRailFence.webp";
    const CompositeFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.26.21-CompositeFence/Mobile/4.26.21-CompositeFence7.webp";
    const CustomFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/CustomPicketCarousel.webp";
    const WroughtIron = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/FullSize/DecorativeIronFence_642_6+(1).webp";
    const BoardOverBoard = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/5.27.21-BoardOverBoard/Mobile/5.27.21-BoardOverBoard13.webp";

    return(
        <div>
            <div>
                <h1 className='title'>Chain Link Fences for Your Denver, CO Property</h1>
            </div>
            <div className="woodFencesParagraph">
                <h2>We Build and Install Chain Link Fences</h2>
                <p>
                    If you’re looking for seasoned contractors to build and install chain link fences
                    at your Denver, CO property, GreenView Solutions is the team to call! 
                    We strive to deliver the best and nothing less. Whether you come to us for 
                    residential chain link fencing or commercial ornamental iron fencing, we 
                    utilize our skills and knowledge to turn quality materials into lasting 
                    statements for your property. For almost 50 years, we’ve put our passion for 
                    improving and securing homes and businesses to good use. We’ve helped thousands 
                    of clients and performed impeccable work for homes and businesses around Denver, 
                    and we would love to help you as well!
                </p>

                <h3>Chain Link Options for Your Denver, CO Property</h3>
                <p>
                    Chain link fences are an economical option that comes in a variety of 
                    colors to enhance your Denver, CO property. We are happy to accommodate 
                    custom requests and do everything in our power to give you what you want, 
                    the way you want it. As a leading fence company, we stock the most popular 
                    styles and colors for chain link fences, with various post types available 
                    to suit your needs and preferences. Plus, if you need a gate to go with 
                    your new fence, don’t sweat it. We keep different types, styles, and sizes 
                    of gates in our inventory, and we craft custom gates upon request. We can 
                    also provide privacy slats in a variety of colors.
                </p>
            </div>
            <div className='info'>(Hover Over Image for Details)</div>
                <div className="fences">
                    <div className="left">  
                        <div className="project1">
                            <div className="image">
                                <img src={PrivacyFence} id="residential1" alt='Privacy fence with cedar pickets, 6ft tall and 146 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Privacy Fence<br /></h1>
                                <p>Average Cost: $39 per linear foot.</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Chain Link Fence</h2>
                            <div>Privacy fencing is one of the most common styles of fencing used by homeowners and contractors for several different reasons. When privacy fencing is installed it’s mainly for security, privacy, noise reduction, curb appeal and to add protection for your family. Regardless of the reason for installing a privacy fence, this style of fencing will add value to your home and add curb appeal.
                                In order for a fence to be defined as a privacy fence, it must cover four categories: security, function, durability and design. For example, a chain link fence doesn’t offer much privacy or design, therefore it doesn’t qualify as a privacy fence.</div>
                        </div>
                    </div>     
                </div>
        </div>
    )
}

export default ChainLinkFences;