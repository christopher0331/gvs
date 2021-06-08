import React from 'react'; 
import './styles/OurProcess.css';
import Modal from './Modal.jsx';

class OurProcess extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            modal: 'Visit'
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal(modalToShow){
        this.setState({
            modal: modalToShow
        })
    }

    render(){
            return(
                <div className="outterBoxProcess">
                    <div className="processTitle">Fencing Process</div>
                    <div id="row">
                        <div id="column">
                            <div id="row">
                                    <div className="steps" onClick={() => this.showModal('Visit')}>
                                        1. Visit
                                    </div>
                                    <div className="steps" onClick={() => this.showModal('Estimate')}>
                                        2. Estimate
                                    </div>
                                    <div className="steps" onClick={() => this.showModal('Permits')}>
                                        3. Permits
                                    </div>
                                    <div className="steps" onClick={() => this.showModal('Removal')}>
                                        4. Remove Old Fence
                                    </div>
                                </div>
                                <div id="row">
                                    <div className="steps" onClick={() => this.showModal('PostHoles')}>
                                        5. Post Holes
                                    </div>
                                    <div className="steps" onClick={() => this.showModal('Construct')}>
                                        6. Construct Fence
                                    </div>
                                    <div className="steps" onClick={() => this.showModal('CleanUp')}>
                                        7. Clean Up
                                    </div>
                                </div>
                        </div>
                        
                        <div className="ourProcess">
                            <div className="theModal">
                                <Modal modal={this.state.modal} />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default OurProcess;