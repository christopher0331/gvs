import { React } from 'react';
import './styles/FencingTypes.css';

const FenceTypes = () => {

    const WroughtIron = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/FullSize/DecorativeIronFence_642_6+(1).webp";
    
    return(
        <div>
            <div>
                <h1 className='title'>Wrought Iron Fences in Denver, CO</h1>
            </div>
            <div className="woodFencesParagraph">
               <h2>We Can Build Wrought Iron Fences </h2>
                    <p>
                        If you are looking to add beautifully-crafter ornamental iron
                        fences to your commercial or residential property in Denver, CO, call on 
                        the team at GreenView Solutions today! We have been providing Denver locals with 
                        special and unique options to chain link fences, and we’d love to do the same for 
                        you. As a 100% bonded and insured fencing company, you can rest assured we are 
                        dedicated to “Building Better Fences” that are affordable and safe. When working 
                        with us, you’ll receive quality work the first time, every time. That’s our 
                        promise.
                    </p>

                <h2>The Benefits of Ornamental Iron Fencing Systems</h2>
                    <p> 
                        Fencing is a critical element to your Denver, CO home or business. 
                        It provides ample security and privacy but also works to increase your 
                        curb appeal. That’s why you want to make sure you’re picking fencing that 
                        is high-quality and aesthetically pleasing. Ornamental iron is an excellent 
                        addition to any yard or commercial property due to its attractiveness and 
                        durability. Some of the most substantial benefits of ornamental iron include 
                        the following:
                    </p>
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
                            <p>
                                Wrought Iron Fences, or Decorative Ornamental Iron fences are 
                                really popular for those who are looking for security, durability, 
                                beauty and an open look. As you've might've read above, these fences
                                can last for decades with little to no upkeep costs. They are elegant and come
                                in a wide variety of styles. You can add toppers to you posts and bars for additional
                                securtity, or keep it flat for more laid back look. Whatever your preference, you can 
                                count us to get it done right! 
                            </p>
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