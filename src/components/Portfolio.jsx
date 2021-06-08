import React from 'react';
import Residential2 from './assets/residential2.JPG'
import './styles/Portfolio.css';

class Portfolio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showProject: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div id="primaryBox">
                    <div className="portfolioTitle">
                        <h1>Portfolio</h1>   
                    </div>
                    <div className="portfolioBlock">
                        <div className="portfolioProjects">
                            <img src={Residential2} className="portfolioImage"/>
                            <div className="portfolioBody">
                                <h3>Greenwood Horizontal 2020</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
                                <div onClick={() => this.props.changePage("Feature1")}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={Residential2} className="portfolioImage"/>
                            <div className="portfolioBody">
                                <h3>Feature 2</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
                                <div onClick={() => this.props.changePage("Feature2")}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={Residential2} className="portfolioImage"/>
                            <div className="portfolioBody">
                                <h3>Feature 3</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
                                <div onClick={() => this.props.changePage("Feature3")}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioBlock">
                    <div className="portfolioProjects">
                        <img src={Residential2} className="portfolioImage"/>
                            <div className="portfolioBody">
                                <h3>Feature 4</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
                                <div onClick={() => this.props.changePage("Feature4")}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={Residential2} className="portfolioImage"/>
                            <div className="portfolioBody">
                                <h3>Feature 5</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
                                <div onClick={() => this.props.changePage("Feature5")}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioProjects">
                            <img src={Residential2} className="portfolioImage"/>
                            <div className="portfolioBody">
                                <h3>Feature 6</h3>
                                Block1sa;dlfjk sdaklfjsa slakjfs d sdfkjfsdkfjasd
                                <div onClick={() => this.props.changePage("Feature6")}>
                                    <div class="btn2 from-left2">
                                        View Project
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
    
        )
    }
}

export default Portfolio;