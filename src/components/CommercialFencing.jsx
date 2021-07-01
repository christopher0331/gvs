import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const ChainLinkFences = () => {
    const CommercialFenceImage = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Commercial_642.webp";


    return(
        <div>
            <div>
                <h1 className='title'>Commercial Fences for Your Denver, CO Property</h1>
            </div>
            <div className="woodFencesParagraph">
                <h2>The Benefits of Investing in A Commercial Fence</h2>
                <ul>
                    <li><strong>Security</strong>–When you own a commercial business or property, 
                        you want to ensure your employees and assets are adequately guarded. Investing 
                        in a  commercial fence that provides ample security is your best line of defense 
                        against trespassers and theft. By having a commercial fence installed at
                        your property, you take the necessary steps to prevent any outside sources 
                        from affecting your commercial business.
                    </li>
                    <li><strong>Privacy</strong>–Depending on your type of commercial business, the privacy of your employees or 
                        your clientele may be of utmost importance. By investing in a fence that provides 
                        ample privacy, you are communicating that you value the privacy
                        and safety of those on your commercial property. Privacy fencing 
                        options also ensure proper access and traffic control. With the 
                        appropriate fencing, you become able to control who can go where 
                        on your property.
                    </li>
                    <li><strong>Curb Appeal</strong>– 
                        When you invest in fencing for security and privacy reasons, you 
                        also want to make sure this investment is adding value to your 
                        commercial space. You need a fence that is efficient while 
                        simultaneously attractive. At Alpine Fence Co., we will help you 
                        find a fencing solution that works to complement your building and 
                        commercial grounds. We offer a plethora of options, from ornamental 
                        iron to chain link fences, that are sure to add curb appeal to your 
                        property.
                    </li>
                </ul>
                 
            </div>
            <div className='info'>(Hover Over Image for Details)</div>
                <div className="fences">
                    <div className="left">  
                        <div className="project1">
                            <div className="image">
                                <img src={CommercialFenceImage} id="residential1" alt='Privacy fence with cedar pickets, 6ft tall and 146 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Commercial Fencing<br /></h1>
                                <p>Average Cost: $39 per linear foot.</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Commercial Fencing</h2>
                            <div>Privacy fencing is one of the most common styles of fencing used by homeowners and contractors for several different reasons. When privacy fencing is installed it’s mainly for security, privacy, noise reduction, curb appeal and to add protection for your family. Regardless of the reason for installing a privacy fence, this style of fencing will add value to your home and add curb appeal.
                                In order for a fence to be defined as a privacy fence, it must cover four categories: security, function, durability and design. For example, a chain link fence doesn’t offer much privacy or design, therefore it doesn’t qualify as a privacy fence.</div>
                        </div>
                    </div>     
                </div>
        </div>
    )
}

export default ChainLinkFences;