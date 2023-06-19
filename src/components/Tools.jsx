import React from 'react'; 
import Calculator from './Calculator.jsx';
import OurProcess from './OurProcess.jsx';
import './styles/AboutUs.css';
import ProjectOverviewForm from './ProjectOverviewForm.jsx';

const Tools = (props) => {

    return(
        <div className='tools'>
            <div className="pageTitleDiv">
                <div className="pageTitle">
                    Tools

                </div>
            </div>
            <OurProcess />
            <div className="calculatorSection">
                <div className="calculatorInfo">
                    <div className="calculatorInfoTitle">
                        Calculator Info
                    </div>
                    <div className="calculatorInfoText">
                        Calculator price is a general estimate. Price is subject to changes in cost of materials. Premium and Standard fencing is based on a 6ft height.
                    </div>
                </div>
                <Calculator />
            </div>


            <div>
                    <ProjectOverviewForm />
                </div>
        </div>
    )
}

export default Tools;