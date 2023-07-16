import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { Button, Modal } from 'react-bootstrap';
import { Card, Image } from 'semantic-ui-react';
import FeaturedProject from './FeaturedProject.js';
import ErrorBoundary from './ErrorBoundary.jsx';

import './styles/Portfolio.css';
import axios from 'axios';

require('dotenv').config();

AWS.config.credentials = new AWS.Credentials();


console.log('===================> ', process.env)
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
  };

  useEffect(() => {

    const fetchData = async () => {

      try {
        AWS.config.update({
          region: 'us-west-2',
          accessKeyId: process.env.REACT_APP_PublicAccess,
          secretAccessKey: process.env.REACT_APP_PrivateKey,
        });

        const s3 = new AWS.S3();

        const projects = [];
        for (let i = 1; i <= 15; i++) {
          const projectFolder = `Portfolio/Project${i}/FullSize/`;
          const params = {
            Bucket: 'greenviewsolutionsimages',
            Prefix: projectFolder,
          };

          try {
            const data = await s3.listObjectsV2(params).promise();
            const images = data.Contents
              .filter(item => item.Key.endsWith('.webp') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.JPG'))
              .map(item => ({
                id: i,
                url: `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`,
              }));
            projects.push(images);
          } catch (err) {
            console.log(err);
          }
        }
        setProjectImages(projects);
      } catch (err) {
        console.log('error', err);
      }
    }

    fetchData();
  }, []);

  

  return (
    <ErrorBoundary>
      <ul>
        <div id="primaryBox">
          <div className="portfolioTitle">
            <h1>Portfolio</h1>
          </div>
          <div className="portfolioBlock">
          {projectImages.map(project => (
            <div key={project[0].id}>
                <div className="portfolioProjects">
                <img src={project[0].url} className="portfolioImage" alt="" />

                <div className="portfolioBody">
                    <div onClick={() => handleShow(project[0].id)}>
                    <div className="btn2 from-left2">View Project</div>
                    </div>

                    <Modal show={show && currentProjectId === project[0].id} onHide={() => handleClose(project[0].id)}>
                    <FeaturedProject projectNumber={project[0].id} images={project.map(image => image.url)} />

                    <Button variant="secondary" onClick={() => handleClose(project[0].id)} className="projectButton">
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
    </ErrorBoundary>
  );
};

export default S3Bucket;
