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

export default FenceTypes;