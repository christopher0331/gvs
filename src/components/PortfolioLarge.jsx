import { React, useState, lazy } from 'react';
import {Button, Modal } from 'react-bootstrap';
import './styles/Portfolio.css';
import './styles/Project.css';

const PortfolioLarge = () =>  {

        const FeaturedProject1 = lazy(() => import('./FeaturedProject1.jsx'));
        const FeaturedProject2 = lazy(() => import('./FeaturedProject2.jsx'));
        const FeaturedProject3 = lazy(() => import('./FeaturedProject3.jsx'));
        const FeaturedProject4 = lazy(() => import('./FeaturedProject4.jsx'));
        const FeaturedProject5 = lazy(() => import('./FeaturedProject5.jsx'));
        const FeaturedProject6 = lazy(() => import('./FeaturedProject6.jsx'));
        const FeaturedProject7 = lazy(() => import('./FeaturedProject7.jsx'));


        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [show2, setShow2] = useState(false);
        const handleClose2 = () => setShow2(false);
        const handleShow2 = () => setShow2(true);

        const [show3, setShow3] = useState(false);
        const handleClose3 = () => setShow3(false);
        const handleShow3 = () => setShow3(true);

        const [show4, setShow4] = useState(false);
        const handleClose4 = () => setShow4(false);
        const handleShow4 = () => setShow4(true);

        const [show5, setShow5] = useState(false);
        const handleClose5 = () => setShow5(false);
        const handleShow5 = () => setShow5(true);

        const [show6, setShow6] = useState(false);
        const handleClose6 = () => setShow6(false);
        const handleShow6 = () => setShow6(true);

        const [show7, setShow7] = useState(false);
        const handleClose7 = () => setShow7(false);
        const handleShow7 = () => setShow7(true);

        const horizontalPrivacyFence2 = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/FeaturedProjects/Project2/picture1";
        const CustomMultiFamilyHome = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/FeaturedProjects/Project5/picture23";
        const SplitRailFencing = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/FeaturedProjects/Project6/picture1";
        const horizontalPrivacyFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/FeaturedProjects/Project1/picture13";
        const EightftPremiumPrivacy = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/FeaturedProjects/Project3/picture6";
        const shortHorizontalDecorativeFence = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/FeaturedProjects/Project4/picture7"; 
    
       
        return(
            <div id="primaryBox">
                    <div className="portfolioTitle">
                        <h1>Portfolio</h1>   
                    </div>
                    <div className="portfolioBlock">

                    </div>
                    <div className="portfolioBlock">
                        <div className="portfolioProjects">
                            <img src={horizontalPrivacyFence} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Standard Horizontal Privacy Fence</h3>
                                <p>

                                </p>        
                                <div onClick={handleShow}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <FeaturedProject1 />
                                    <Button variant="secondary" onClick={handleClose} className="projectButton">
                                        Close
                                    </Button>
                                </Modal>   
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={horizontalPrivacyFence2} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Premium Horizontal Privacy Fence</h3>
                                <p>

                                </p>
                                <div onClick={handleShow2}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                                <Modal show={show2} onHide={handleClose2}>
                                    <FeaturedProject2 />
                                    <Button variant="secondary" onClick={handleClose2} className="projectButton">
                                        Close
                                    </Button>
                                </Modal>   
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={EightftPremiumPrivacy} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>8ft Premium Privacy Fence</h3>
                                <p>

                                </p>
                                <div onClick={handleShow3}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                                <Modal show={show3} onHide={handleClose3}>
                                    <FeaturedProject3 />
                                    <Button variant="secondary" onClick={handleClose3} className="projectButton">
                                        Close
                                    </Button>
                                </Modal>   
                            </div>
                        </div>
                    </div>
                    <div className="portfolioBlock">
                    <div className="portfolioProjects">
                        <img src={shortHorizontalDecorativeFence} className="portfolioImage" alt=''/>
                        <div className="portfolioBody">
                                <h3>Short Horizontal Decorative Fence</h3>
                                <p>

                                </p>
                                <div onClick={handleShow4}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                                <Modal show={show4} onHide={handleClose4}>
                                    <FeaturedProject4 />
                                    <Button variant="secondary" onClick={handleClose4} className="projectButton">
                                        Close
                                    </Button>
                                </Modal>   
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={SplitRailFencing} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Ranch Rail Fencing</h3>
                                <p>

                                </p>
                                <div onClick={handleShow5}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                                <Modal show={show5} onHide={handleClose5}>
                                    <FeaturedProject6 />
                                    <Button variant="secondary" onClick={handleClose5} className="projectButton">
                                        Close
                                    </Button>
                                </Modal>   
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={CustomMultiFamilyHome} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Custom Multi-Family Home Fencing</h3>
                                <p>

                                </p>
                                <div onClick={handleShow6}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                                <Modal show={show6} onHide={handleClose6}>
                                    <FeaturedProject5 />
                                    <Button variant="secondary" onClick={handleClose6} className="projectButton">
                                        Close
                                    </Button>
                                </Modal>   
                            </div>
                        </div>
                    </div>   

                </div>
        )
    }

export default PortfolioLarge;