import {useEffect, React } from 'react';
import Overview from './Overview.jsx';
import OurProcess from './OurProcess.jsx';

const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <Overview />
            <OurProcess />
        </div>

    )
}

export default AboutUs;

