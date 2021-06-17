import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const FenceTypes = () => {

    const HorizontalPrivacy = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"
    const wireFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Security_642.webp";
    const PremiumPicket = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/11.14.20-PremiumPicket/Mobile/PremiumPicket14.webp";
    const PrivacyFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/FullSize/4.14.21-6ftPickett_5.webp";
    const RanchRail = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/10.30.20-RanchRail/Mobile/10.30.20-RanchRail21.webp";
    const SplitRail = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/SplitRail/Mobile/SplitRailFence.webp";
    const CompositeFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.26.21-CompositeFence/Mobile/4.26.21-CompositeFence7.webp";
    const CustomFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/CustomPicketCarousel.webp";
    const WroughtIron = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.13.21-IronFencing-Folder/FullSize/DecorativeIronFence_642_6+(1).webp";


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
                                <img src={PrivacyFence} id="residential1"/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Residential<br /></h1>
                                <p>Lorem ot ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Privacy Fence</h2>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div>
                    </div>     
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Premium Privacy Fence</h2>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                            <img src={PremiumPicket}/>
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
                        <div className="project1">
                            <div className="image">
                            <img src={HorizontalPrivacy}/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Wire Fences<br /></h1>
                                <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Horizontal Privacy Fence</h2>
                            <div>Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                    </div>
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Ranch Rail</h2>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                            <img src={RanchRail}/>
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
                        <div className="project1">
                            <div className="image">
                            <img src={SplitRail}/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Wire Fences<br /></h1>
                                <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Split Rail</h2>
                            <div>Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                    </div>
                    <div className="right"> 
                        <div className='project2Text'>
                            <h2>Composite Fence</h2>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                        <div className="project2">
                            <div className="image">
                            <img src={CompositeFence}/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Composite Fence<br /></h1>
                                <p>Lorem impsu when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={CustomFence}/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Custom Fence<br /></h1>
                                <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
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
                            <img src={WroughtIron}/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Wrought Iron<br /></h1>
                                <p>Lorem impsu when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="left"> 
                        <div className="project1">
                            <div className="image">
                            <img src={CustomFence}/>
                            </div>
                            <div className="details">
                            <div className="center">
                                <h1>Board Over Board<br /></h1>
                                <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                            </div>
                            </div>
                        </div>
                        <div className='project1Text'>
                            <h2>Board Over Board</h2>
                            <div>Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                        </div> 
                    </div>
                </div>
        </div>
    )
}

export default FenceTypes;