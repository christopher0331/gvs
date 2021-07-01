import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const FenceTypes = () => {

    const HorizontalPrivacy = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"
    const PremiumPicket = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/11.14.20-PremiumPicket/Mobile/PremiumPicket14.webp";
    const PrivacyFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_4.webp";
    const WroughtIron = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/FullSize/DecorativeIronFence_642_6+(1).webp";
    const BoardOverBoard = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/5.27.21-BoardOverBoard/Mobile/5.27.21-BoardOverBoard13.webp";

    return(
        <div>
            <div>
                <h1 className='title'>Wrought Iron Fences in Denver, CO</h1>
            </div>
            <div className="woodFencesParagraph">
               <h2>We Can Build Wrought Iron Fences </h2>
                    If you are looking to add beautifully-crafter ornamental iron or wood 
                    fences to your commercial or residential property in Denver, CO, call on 
                    the team at GreenView Solutions today! We have been providing Denver locals with 
                    special and unique options to chain link fences, and we’d love to do the same for 
                    you. As a 100% bonded and insured fencing company, you can rest assured we are 
                    dedicated to “Building Better Fences” that are affordable and safe. When working 
                    with us, you’ll receive quality work the first time, every time. That’s our 
                    promise.

                <h2>The Benefits of Ornamental Iron Fencing Systems</h2>
                    Fencing is a critical element to your Denver, CO home or business. 
                    It provides ample security and privacy but also works to increase your 
                    curb appeal. That’s why you want to make sure you’re picking fencing that 
                    is high-quality and aesthetically pleasing. Ornamental iron is an excellent 
                    addition to any yard or commercial property due to its attractiveness and 
                    durability. Some of the most substantial benefits of ornamental iron include 
                    the following:
                <ul>
                    <li>
                        <strong>Strong Material</strong> – 
                        The metals used for this type of decorative fencing are strong, durable, and can 
                        withstand harsh environmental conditions for years without any substantial signs of 
                        wear. Ornamental iron fencing is especially suitable for high windstorms we are 
                        accustomed to here in Denver. You won’t have to worry about the wind damaging your 
                        fence when it’s made of durable iron!
                    </li>
                    <li>
                        <strong>Style Versatility</strong> – 
                        Ornamental iron can be made into a variety of different styles. This type of 
                        fencing system is an excellent alternative to wood fences because ornamental 
                        iron offers the same security and durability with a more elegant look.
                    </li>
                    <li>
                        <strong>Extra Protection</strong> – 
                        This type of fencing is well known for its barrier abilities. Not only do oriental 
                        iron fences present a clearly mapped out and almost intimidating barrier between 
                        your property line and the rest of the word, but it looks great while doing so. 
                        When you need a significant theft, vandalism, or trespasser deterrent, ornamental 
                        iron is the way to go.
                    </li>
                    <li>
                        <strong>Minimal Upkeep</strong> – 
                        Ornamental iron fencing is designed to be maintenance-free. Unlike wood fences 
                        that require a bit of maintenance over time, you won’t have to worry about 
                        ornamental iron getting damaged or worn down due to lack of upkeep.
                    </li>
                        
                        Ornamental iron is available in a variety of styles that will provide your home or business with security and elegance. GreenView Solutions can also provide you with the latest styles in Montage by Ameristar. Call today to learn more.
                </ul>

            </div>
            <div className='info'>(Hover Over Image for Details)</div>
                <div className="fences">
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Wrought Iron</h2>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                            <img src={WroughtIron} alt='Wrought Iron fencing, 4ft tall, 105 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Wrought Iron<br /></h1>
                                <p>Average Cost: $60 per linear foot</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FenceTypes;