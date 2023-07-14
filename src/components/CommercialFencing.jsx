import { React, lazy } from 'react';
import './styles/FencingTypes.css';

const ChainLinkFences = () => {
    const CommercialFenceImage = "https://ik.imagekit.io/greenviewsolutions/HomePage/SmallSizedWEBP/Commercial_642.webp?tr=w-700,h-700";


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
                                <p>Prices Vary Widely</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Commercial Fencing</h2>
                            <div>
                                Commercial projects are some of the most detail heavy projects. When placing fencing at scale, it's 
                                critical to get the planning done right, since there is very little room for error. Because of this, 
                                we always place our top teams on these projects, and the top levels of the company are heavily focused 
                                on the planning portion of these projects. Ensuring that the build teams are set up for success when 
                                they start setting in posts and construct the fencing. Regardles of the type of fence, we handle all 
                                commercial projects and have covered them all. Chain link fencing, 12ft wood fencing, and 12ft concrete 
                                privacy walls, we've done them all. 
                            </div>
                        </div>
                    </div>     
                </div>
        </div>
    )
}

export default ChainLinkFences;