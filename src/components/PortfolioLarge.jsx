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

        const DecorativeIronFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/DecorativeIronFence_642_6.webp";
        const RanchRail ="https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/RanchRail.webp";
        const CustomPickett ="https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/CustomPickett_642.webp";
        const Commercial ="https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Commercial_642.webp";
        const HOA6FtPicket ="https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/Mobile/4.23.21-HOA6FtPicket_6.webp";
        const PicketFence ="https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_6.webp";
            
        return(
            <div id="primaryBox">
                    <div className="portfolioTitle">
                        <h1>Portfolio</h1>   
                    </div>
                    <div className="portfolioBlock">
                        <div className="portfolioProjects">
                            <img src={DecorativeIronFence} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                    Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
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
                            <img src={RanchRail} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
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
                            <img src={CustomPickett} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
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
                        <img src={Commercial} className="portfolioImage" alt=''/>
                        <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
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
                            <img src={HOA6FtPicket} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
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
                            <img src={PicketFence} className="portfolioImage" alt=''/>
                            <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
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