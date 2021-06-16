import { React, useState, lazy } from 'react';
import {Button, Modal } from 'react-bootstrap';
import './styles/Portfolio.css';
import './styles/Project.css';
import PortfolioMed from './PortfolioMed.jsx';
import PortfolioLarge from './PortfolioLarge.jsx';

const Portfolio = () =>  {

    if(window.innerWidth > 1106){
        return (
           <PortfolioLarge />
        )
    } if(window.innerWidth < 1106){
        return (
            <PortfolioMed />
        )
    }
}

export default Portfolio;