import { React, useState, lazy } from 'react';
import {Button, Modal } from 'react-bootstrap';
import './styles/Portfolio.css';
import './styles/Project.css';
import PortfolioLarge from './PortfolioLarge.jsx';
import PortfolioImages from './PortfolioImages.jsx';

const Portfolio = () =>  {
    return(
        <div>
            <PortfolioImages projectImages={PortfolioImages} />
            {/* <PortfolioLarge images={PortfolioImages}/> */}
        </div>
    )

}

export default Portfolio;