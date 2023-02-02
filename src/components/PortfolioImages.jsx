import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import {Button, Modal } from 'react-bootstrap';
import { Card, Image } from 'semantic-ui-react';
import Feature1 from './FeaturedProject1.jsx';
import './styles/Portfolio.css';
import './styles/Project.css';


const S3Bucket = () => {

    const [projectImages, setProjectImages] = useState([]);

    const [show, setShow] = useState(false);
    
    const [currentProjectId, setCurrentProjectId] = useState(null);

    const handleShow = (id) => {
        setCurrentProjectId(id);
        setShow(true);
    };


    const handleClose = (id) => {
        setCurrentProjectId(id);
        setShow(false);
    } 

    // read access only, will fix later, don't judge me, published projects time sensitive
    useEffect(() => {
        const getImages = "AKIAZJ7XN6M6UNBRKVYV";
        const getImagesMyst = "2v49fYw4jwYfMThMABqj0TCCfkX4XXOSGAp4fnVj";

        AWS.config.update({
            accessKeyId: getImages,
            secretAccessKey: getImagesMyst,
        });

        console.log(getImages, getImagesMyst)

        const s3 = new AWS.S3();

        const getImagesFromProject = async () => {
            const projects = [];
            for (let i = 1; i <= 18; i++) {
                const projectFolder = `Portfolio/Project${i}/FullSize/`;
                const params = {
                    Bucket: 'greenviewsolutionsimages',
                    Prefix: projectFolder,
                };
        
                try {
                    const data = await s3.listObjectsV2(params).promise();
                    const images = data.Contents
                        .filter(item => item.Key.endsWith('.webp') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.JPG'))
                        .map(item => `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`);
                    projects[i] = images;
                } catch (err) {
                    console.log(err);
                }
            }
            setProjectImages(projects)         
        };
        getImagesFromProject();

    }, []);


  return (
    
    <div>
        <ul>
            <div id="primaryBox">
                <div className="portfolioTitle">
                    <h1>Portfolio</h1>   
                </div>
                <div className="portfolioBlock">
                        {projectImages.map((project, index)=> (
                            <div>
                                <div className="portfolioProjects">
                                <img src={project[1]} className="portfolioImage" alt=''/>

                                    <div className="portfolioBody"> 

                                        <div onClick={() => handleShow(index)}>
                                            <div class="btn2 from-left2">
                                                View Project
                                            </div>
                                        </div>

                                        <Modal show={show && currentProjectId === index} onHide={handleClose}>
                                            <Feature1 
                                                key={project}
                                                images={project}
                                            />

                                            <Button variant="secondary" onClick={() => handleClose(index)} className="projectButton">
                                                Close
                                            </Button>
                                        </Modal>   
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </ul>
    </div>    
  );

}

export default S3Bucket;