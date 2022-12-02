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

    const CustomMultiFamilyHome = "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project5/picture23?tr=w-900,h-900";
    const SplitRailFencing = "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project6/picture1?tr=w-900,h-900";
    const horizontalPrivacyFence = "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project1/picture13?tr=w-900,h-900";
    const EightftPremiumPrivacy = "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project3/picture6?tr=w-900,h-900";
    const shortHorizontalDecorativeFence = "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project4/picture7?tr=w-900,h-900"; 
    const horizontalPrivacyFence2 = "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project2/picture1?tr=w-900,h-900";

    return(
    <div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', textShadow:'black 2px 2px 2px', padding: '8px 8px'}}>
            Featured Projects
        </div>
            <div className="projects">
                <div>  
                    <Card.Img variant="custom" src={horizontalPrivacyFence} className='projectImage' alt=''/>
                    <Card.Body className='projectBody'>
                        <Card.Title>Standard Horizontal Privacy</Card.Title>
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
                    <Card.Img variant="custom" src={horizontalPrivacyFence2} className='projectImage' alt=''/>
                    <Card.Body className='projectBody'>
                        <Card.Title>Premium Horizontal Privacy Fence</Card.Title>
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
                    <Card.Img variant="custom" src={EightftPremiumPrivacy} className='projectImage' alt=''/>
                    <Card.Body className='projectBody'>
                        <Card.Title>8ft Premium Privacy Fencing</Card.Title>
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
                    <Card.Img variant="custom" src={shortHorizontalDecorativeFence} className='projectImage' alt=''/>
                    <Card.Body className='projectBody'>
                        <Card.Title>4ft Horizontal Decorative Fence</Card.Title>
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
                    <Card.Img variant="custom" src={CustomMultiFamilyHome} className='projectImage' alt=''/>
                    <Card.Body className='projectBody'>
                        <Card.Title>Custom Multi-Family Home</Card.Title>
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
                    <Card.Img variant="custom" src={SplitRailFencing} className='projectImage' alt='This is an alt text for residential privacy fencing'/>
                    <Card.Body className='projectBody'>
                        <Card.Title>Ranch Rail Fencing</Card.Title>
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