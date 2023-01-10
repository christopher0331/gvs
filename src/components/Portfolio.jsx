import { React, useState, lazy } from 'react';
import {Button, Modal } from 'react-bootstrap';
import './styles/Portfolio.css';
import './styles/Project.css';
import PortfolioMed from './PortfolioMed.jsx';
import PortfolioLarge from './PortfolioLarge.jsx';

const Portfolio = () =>  {
    return(
        <PortfolioLarge />
    )

}

export default Portfolio;