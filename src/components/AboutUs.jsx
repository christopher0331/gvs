import {useEffect, React } from 'react';
import Overview from './Overview.jsx';
import OurProcess from './OurProcess.jsx';

const AboutUs = (props) => {

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
            <Overview />
            <OurProcess />
        </div>

    )
}

export default AboutUs;

