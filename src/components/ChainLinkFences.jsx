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
            <div className='title'>
                Fencing Types
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
                            <h2>Privacy Fence</h2>
                            <div>Privacy fencing is one of the most common styles of fencing used by homeowners and contractors for several different reasons. When privacy fencing is installed it’s mainly for security, privacy, noise reduction, curb appeal and to add protection for your family. Regardless of the reason for installing a privacy fence, this style of fencing will add value to your home and add curb appeal.
                                In order for a fence to be defined as a privacy fence, it must cover four categories: security, function, durability and design. For example, a chain link fence doesn’t offer much privacy or design, therefore it doesn’t qualify as a privacy fence.</div>
                        </div>
                    </div>     
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Premium Privacy Fence</h2>
                            <div>A premium privacy fence provides all the same benefits a privacy fence does but with some extra strudiness that will help te fence last much longer. Two additional 1x6's are added to the street facing side of the panel. And an additional 2x4 added to the top of the fence for each panel.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                                <img src={PremiumPicket} alt='Premium Picket fence with cedar pickets, 6ft tall and 250 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Premium Privacy<br /></h1>
                                <p>Average Cost: $48 per linear foot</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                                <img src={HorizontalPrivacy} alt='Horizontal privacy fence built 5ft tall with cedar pickets.'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Horizontal Privacy Fence<br /></h1>
                                <p>Average Cost: $45/55 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Horizontal Privacy Fence</h2>
                            <div>Feel like mixing it up a little? A horizontal privacy fence adds a new look to your fence yet provides all of the same benefits as a standard privacy fence.</div>
                        </div> 
                    </div>
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Ranch Rail</h2>
                            <div>Ranch rail, also known as Horse Fence, Field Fence, Board Fence, and Farm Fence, is becoming a more popular style of fencing among homeowners and not just ranchers or farmers. Some of the most common uses for this style of fencing is to keep livestock secure on ranches, keeping children and pets in their yard throughout neighborhoods and to add a design statement to mountain living. A traditional horse fence will be either two, three or four rails. You also have many different design options compared to split rail and post and dowel because there are no pre-cut holes.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                                <img src={RanchRail} alt='Ranch Rail Fencing'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Ranch Rail<br /></h1>
                                <p>Average Cost: $38 per linear foot</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={SplitRail} alt='Split Rail Fencing'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Split Rail<br /></h1>
                                <p>Average Cost: $31 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Split Rail</h2>
                            <div> Split rail fencing is one of the earliest forms of fencing that was used in America. The main reason for this is because of its affordability and easy installation. When it comes to installing a split rail fence it requires little materials so you can install it quickly and with little help. A split rail fence is an ideal option is you are looking to add a rustic look to your home curb appeal on a budget.</div>
                        </div> 
                    </div>
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Composite Fence</h2>
                            <div>Trex is a very well-known and popular manufacturer that works with suppliers and wholesalers across the country. They specialize in composite materials, specifically decking and fencing. Their fencing, which is a rather new product, has allowed clients to still reap the benefits of privacy fencing such as security and privacy, but without the natural wood hassle. Natural wood is a great option for fencing, however, if you are a homeowner looking for an easier to maintain option, composite fencing is the way to go.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                            <img src={CompositeFence} alt='Composite fencing, 6ft tall, 180 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Composite Fence<br /></h1>
                                <p>Average Cost: $80 per linear foot</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={CustomFence} alt='Custom cedar picket fencing with top wiring, 6ft tall, 260 linear feet'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Custom Fence<br /></h1>
                                <p>Average Cost: $48 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Custom Fence</h2>
                            <div>Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                    </div>
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
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={BoardOverBoard} alt='Board over board cedar picket fencing, 140 linear feet, 6ft tall'/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Board Over Board<br /></h1>
                                <p>Average Cost: $52 per linear foot</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Board Over Board</h2>
                            <div>Lorem ipmsum</div>
                        </div> 
                    </div>
                </div>
        </div>
    )
}

export default ChainLinkFences;