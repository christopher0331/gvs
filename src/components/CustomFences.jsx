import { React, lazy } from 'react';
// import Residential from './assets/residential.JPG';
// import wireFence from './assets/wireFence.JPG'
import './styles/FencingTypes.css';

const CustomFences = () => {

    const CompositeFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/4.26.21-CompositeFence/Mobile/4.26.21-CompositeFence7.webp";
    const CustomFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/CustomPicketCarousel.webp";

    return(
        <div>
            <div>
                <h1 className='title'>Composite and Custom Fences</h1>
            </div>
            <div className='info'>(Hover Over Image for Details)</div>
                <div className="fences">  
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
                </div>
        </div>
    )
}

export default CustomFences;