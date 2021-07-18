import { React } from 'react';
import './styles/AboutUs.css';

const CrewWithTruck = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/AboutUs/AboutUsImage.webp";


const Overview = () => (
    
    <div>

        <div className="aboutUs">
            About Us
        </div>
        <div className="AboutUsInfo">
                <h3>We are Bonded and Insured</h3>
                    <p>When you have a fence built and installed by the team at GreenView Solutions, 
                        you can rest assured that it is done so with extreme care and superior skill. 
                        We are a proud member of the American Fence Association and Master Builders Association, 
                        which means our superior skills haven’t gone unnoticed. Additionally, we participate in 
                        the Better Business Bureau Reliability Program, guaranteeing our company exhibits a reputation 
                        for excellent customer care. We are 100% bonded and insured, ensuring you can trust that our work 
                        will meet your standards of excellence and deliver a visually-appealing, 
                        purposeful fence for your home or business.
                    </p>

                <h3>We Offer a Wide Range of Fencing Styles</h3>
                    Choosing your style of fencing is not an endeavor that you should take 
                    lightly. There is a lot to consider, including style, durability, area, 
                    and size. Because Denver and the surrounding communities have a vast 
                    assortment of plots and styles for residential neighborhoods and office 
                    complexes, GreenView Solutions offers a wide variety of fence styles to suit 
                    your needs perfectly. Not only do we utilize the best materials for all our 
                    fences, but we also employ a staff that uses proven techniques to ensure 
                    durability and elegance regardless of the scope of your project. We design and 
                    install wood fences, chain link fences, ornamental iron fences, specialty fences, 
                    and commercial fences, all with the grace and precision that can only be cultivated 
                    through nearly 50 years of hands-on experience.
            </div>
            <div className="imageAndDescription">

                <img class="crewImage" src={CrewWithTruck} alt='GreenView Solutions crew with truck' /> 

                <div className="description">
                    <div className="aboutUsSection">
                        <div className="descTitle">
                            What Matters To Us:
                        </div>
                        <div className="descText">
                            Our chief concern is delighting our customers with exceptional service and communication.
                        </div>
                    </div>
                    <div className="aboutUsSection">
                        <div className="descTitle">
                            What We Do: 
                        </div>
                        <div className="descText">
                            GreenView Solutions builds beautiful fencing, in a timely manner, and  with quality
                            as the primary concern. We strive to leave the customer feeling like they got more than
                            they paid for.
                        </div>
                    </div>
                    <div className="aboutUsSection">
                        <div className="descTitle">
                            About Us:
                        </div>
                        <div className="descText">
                            GreenView Solutions was started 10 years ago, and has employed experts with decades
                            of experience. There is no fencing or irrigation project our experts have completed,
                            and our upper managment team ensures that all projects are done with the highest level
                            of quality in mind.  
                        </div>
                    </div>
                </div>
            </div>
</div>

)

export default Overview;