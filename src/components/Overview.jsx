import { React } from 'react';
import './styles/AboutUs.css';

const CrewWithTruck = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/AboutUs/AboutUsImage.webp";


const Overview = () => (
    
    <div className="title">

    <div className="aboutUs">
        About Us
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
                    Constructing beautiful and effective fencing, irrigation and service.
                </div>
            </div>
                <div className="aboutUsSection">
                    <div className="descTitle">
                        About Us:
                    </div>
                    <div className="descText">
                        lkfs  nm,n fsdi ufdsaerfn  nfdsfnisafien fnlsdkfnsf safjlksdjfiwferi nv sivskdnvwei i jonvs igoinvsn;lsvsv i fsd fo ijf;sdifj  osdijflk sdn;lcsidajf;lsd;v sldijflsa vcmcsmnvnclksdn  klsdjf
                    </div>
                </div>
            </div>
    </div>
</div>

)

export default Overview;