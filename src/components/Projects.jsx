import { React, lazy, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './styles/Project.css';

const Projects = () => {
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

    const FeaturedProject1 = lazy(() => import('./FeaturedProject1.jsx'));
    const FeaturedProject2 = lazy(() => import('./FeaturedProject2.jsx'));
    const FeaturedProject3 = lazy(() => import('./FeaturedProject3.jsx'));
    const FeaturedProject4 = lazy(() => import('./FeaturedProject4.jsx'));
    const FeaturedProject5 = lazy(() => import('./FeaturedProject5.jsx'));
    const FeaturedProject6 = lazy(() => import('./FeaturedProject6.jsx'));

    const Residential = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.14.21-6ftPickett-Folder/Mobile/4.14.21-6ftPickett_6.webp";
    const Residential2 = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/Mobile/4.23.21-HOA6FtPicket_6.webp";
    const ironFence = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/DecorativeIronFence_642_6.webp";
    const meshTop = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/CustomPickett_642.webp";
    const schoolProject = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Commercial_642.webp"; 
    const splitRail2 = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/RanchRail.webp";

    return(
    <div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', textShadow:'black 2px 2px 2px', padding: '8px 8px'}}>
            Featured Projects
        </div>
            <div className="projects">
                <div>  
                    <Card.Img variant="custom" src={ironFence} className='projectImage' />
                    <Card.Body className='projectBody'>
                        <Card.Title>Wrought Iron Fence</Card.Title>
                        <Button variant="custom" className="successButton" onClick={handleShow}>
                            View Project
                        </Button>
                            <Modal show={show} onHide={handleClose}>
                                <FeaturedProject1 />
                                <Button variant="secondary" onClick={handleClose} className="projectButton">
                                    Close
                                </Button>
                            </Modal>
                    </Card.Body>
                </div>
                <div>  
                    <Card.Img variant="custom" src={splitRail2} className='projectImage' />
                    <Card.Body className='projectBody'>
                        <Card.Title>Ranch Rail Fence</Card.Title>
                        <Button variant="custom" className="successButton" onClick={handleShow2}>
                            View Project
                        </Button>
                            <Modal show={show2} onHide={handleClose2}>
                                <FeaturedProject2 />
                                <Button variant="secondary" onClick={handleClose2}>
                                    Close
                                </Button>
                            </Modal>                    
                    </Card.Body>
                </div>
                <div>  
                    <Card.Img variant="custom" src={meshTop} className='projectImage' />
                    <Card.Body className='projectBody'>
                        <Card.Title>Custom Residential</Card.Title>
                        <Button variant="custom" className="successButton" onClick={handleShow3}>
                            View Project
                        </Button>
                        <Modal show={show3} onHide={handleClose3}>
                                <FeaturedProject3 />
                                <Button variant="secondary" onClick={handleClose3} className="projectButton">
                                    Close
                                </Button>
                        </Modal>                    
                    </Card.Body>
                </div>
            </div>
            <div className="projects">
                <div>  
                    <Card.Img variant="custom" src={schoolProject} className='projectImage' />
                    <Card.Body className='projectBody'>
                        <Card.Title>Commercial Chainlink Fence</Card.Title>
                        <Button variant="custom" className="successButton" onClick={handleShow4}>
                            View Project
                        </Button>
                        <Modal show={show4} onHide={handleClose4}>
                                <FeaturedProject4 />
                                <Button variant="secondary" onClick={handleClose4}>
                                    Close
                                </Button>
                            </Modal>
                    </Card.Body>
                </div>
                <div>  
                    <Card.Img variant="custom" src={Residential} className='projectImage' />
                    <Card.Body className='projectBody'>
                        <Card.Title>6ft Cedar Privacy Fence</Card.Title>
                        <Button variant="custom" className="successButton" onClick={handleShow5}>
                            View Project
                        </Button>
                        <Modal show={show5} onHide={handleClose5}>
                                <FeaturedProject5 />
                                <Button variant="secondary" onClick={handleClose5}>
                                    Close
                                </Button>
                            </Modal>
                    </Card.Body>
                </div>
                <div>  
                    <Card.Img variant="custom" src={Residential2} className='projectImage' />
                    <Card.Body className='projectBody'>
                        <Card.Title>6ft Cedar Privacy Fence</Card.Title>
                        <Button variant="custom" className="successButton" onClick={handleShow6}>
                            View Project
                        </Button>
                        <Modal show={show6} onHide={handleClose6} className="modal">
                                <FeaturedProject6 />
                                <Button variant="secondary" onClick={handleClose6}>
                                    Close
                                </Button>
                            </Modal>
                    </Card.Body>
                </div>
            </div>
    </div>
    )
}

export default Projects;