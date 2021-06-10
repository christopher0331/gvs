import React from 'react';
import Menu from './Menu.jsx';
import './styles/Menu.css';

const Header = (props) => {

    const Logo = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/clearGVSLogo_300.webp";
    return(
        <div className="header">
            <img className="headerLogo" alt="this is meaningful" rel='preload' src={Logo} />
            <Menu changePage={props.changePage}/>
        </div>
    )
}

export default Header;