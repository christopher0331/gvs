import { React, useState, lazy } from 'react';
import {Button, Modal } from 'react-bootstrap';
import './styles/Portfolio.css';
import './styles/Project.css';
import FeaturedProject1 from './FeaturedProject1.jsx';

const PortfolioLarge = (projects) =>  {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
       
        return(

            <div id="primaryBox">
                <div className="portfolioTitle">
                    <h1>Portfolio</h1>   
                </div>
   
                <div className="portfolioBlock">


                    {Object.keys(projects).map(project => (

                        <div>                    
                            <div className="portfolioProjects">

                            <img src={project[1]} className="portfolioImage" alt=''/>

                                <div className="portfolioBody">
                            
                                    <p>
                                    </p>   

                                    <div onClick={handleShow}>
                                        <div class="btn2 from-left2">
                                            View Project
                                        </div>
                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                        <FeaturedProject1 
                                            key={project}
                                            projectNumber={project}
                                            images={project}
                                        />

                                        <Button variant="secondary" onClick={handleClose} className="projectButton">
                                            Close
                                        </Button>
                                    </Modal>   

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        )
    }

export default PortfolioLarge;