import { React, useState, lazy, useEffect } from 'react';
import {Button, Modal } from 'react-bootstrap';
import './styles/Portfolio.css';
import './styles/Project.css';
import PortfolioLarge from './PortfolioLarge.jsx';
import PortfolioImages from './PortfolioImages.jsx';

const Portfolio = () =>  {

    useEffect(() => {
        window.scrollTo(0, 0)
        
         // Initialize GTM dataLayer
         window.dataLayer = window.dataLayer || [];

         // Define gtag function
         function gtag() {
             window.dataLayer.push(arguments);
         }
 
         // Load GTM script
         const script = document.createElement('script');
         script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11428060127';
         script.async = true;
         document.body.appendChild(script);
 
         // Execute the GTM script
         script.onload = () => {
             gtag('js', new Date());
             gtag('config', 'AW-11428060127');
         };
 
         // Clean up
         return () => {
             document.body.removeChild(script);
         };
      }, [])

      
    return(
        <div>
            <PortfolioImages projectImages={PortfolioImages} />
            {/* <PortfolioLarge images={PortfolioImages}/> */}
        </div>
    )

}

export default Portfolio;