import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { Button, Modal } from 'react-bootstrap';
import { Card, Image } from 'semantic-ui-react';
import FeaturedProject from './ProjectsFeatured.js';
import './styles/Project.css';

const Projects = () => {
  const [projectImages, setProjectImages] = useState([]);
  const [show, setShow] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const handleShow = (id) => {
    setCurrentProjectId(id);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const getImages = "AKIAZJ7XN6M6UNBRKVYV";
    const getImagesMyst = "2v49fYw4jwYfMThMABqj0TCCfkX4XXOSGAp4fnVj";

    AWS.config.update({
      accessKeyId: getImages,
      secretAccessKey: getImagesMyst,
    });

    const s3 = new AWS.S3();

    const getImagesFromProject = async () => {
      const projects = [];
      for (let i = 1; i <= 8; i++) {
        const projectFolder = `Portfolio/Project${i}/FullSize/`;
        const params = {
          Bucket: 'greenviewsolutionsimages',
          Prefix: projectFolder,
        };

        try {
          const data = await s3.listObjectsV2(params).promise();
          const images = data.Contents
            .filter((item) => {
              const key = item.Key.toLowerCase();
              return key.endsWith('.webp') || key.endsWith('.jpeg') || key.endsWith('.jpg');
            })
            .map((item) => `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`);
          projects.push(images);
        } catch (err) {
          console.log(err);
        }
      }
      setProjectImages(projects);
    };

    getImagesFromProject();
  }, []);

  return (
    <div>
      <ul>
        <div id="primaryBox">
          <div className="portfolioTitle">
            <h1>Featured Projects</h1>
          </div>
          <div className="portfolioBlock">
            {projectImages.map((project, index) => (
              <div key={index}>
                <div className="portfolioProjects">
                  <img src={project[0]} className="portfolioImage" alt="" />

                  <div className="portfolioBody">
                    <div onClick={() => handleShow(index + 1)}>
                      <div className="btn2 from-left2">View Project</div>
                    </div>

                    <Modal show={show && currentProjectId === index + 1} onHide={handleClose}>
                      <FeaturedProject projectNumber={index + 1} images={project} />

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
      </ul>
    </div>
  );
};

export default Projects;
