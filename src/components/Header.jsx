import React from 'react';
import Menu from './Menu.jsx';

const Header = (props) => {

    const Logo = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/clearGVSLogo_300.webp";
    return(
        <div style={{backgroundColor: '#194b1e', height: '200px', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <img alt="this is meaningful" rel='preload' src={Logo} style={{top: '5px', left: '1px', height: '220px', width: '220px'}}/>
            <Menu changePage={props.changePage}/>
        </div>
    )
}

export default Header;