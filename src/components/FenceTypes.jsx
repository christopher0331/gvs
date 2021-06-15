import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const FenceTypes = () => {

    const residential = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"
    const wireFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Security_642.webp";

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
                            <img src={residential} id="residential1"/>
                        </div>
                        <div className="details">
                        <div className="center">
                            <h1>Residential<br /></h1>
                            <p>Lorem ot ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                        </div>
                        </div>
                    </div>
                    <div className='project1Text'>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                    </div>
                </div>     
                <div className="right"> 
                    <div className='project2Text'>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                    </div> 
                    <div className="project2">
                        <div className="image">
                        <img src={wireFence}/>
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
                        <img src={wireFence}/>
                        </div>
                        <div className="details">
                        <div className="center">
                            <h1>Wire Fences<br /></h1>
                            <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                        </div>
                        </div>
                    </div>
                    <div className='project1Text'>
                        <div>Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                    </div> 
                </div>
                <div className="right"> 
                    <div className='project2Text'>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                    </div> 
                    <div className="project2">
                        <div className="image">
                        <img src={wireFence}/>
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
                        <img src={wireFence}/>
                        </div>
                        <div className="details">
                        <div className="center">
                            <h1>Wire Fences<br /></h1>
                            <p>Lorem impsum sdfklj got ya and when itt goes we need warmer weather, what a great fence! What's import is that this is great!</p>
                        </div>
                        </div>
                    </div>
                    <div className='project1Text'>
                        <div>Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
                    </div> 
                </div>
            </div>
    </div>
    )
}

export default FenceTypes;