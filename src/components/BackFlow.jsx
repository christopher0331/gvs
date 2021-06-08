import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const BackFlow = (props) => {
    return(
        <div>
            <Header changePage={props.changePage}/>
            <Footer />
        </div>
 
    )
}

export default BackFlow;