import React from 'react';
import './styles/OurProcess.css';

const Modal = (props) => {
    if(props.modal === 'Visit')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                1. Visit
            </div>
            <div className="modalDescription">
                The owner, most likely, will show up at an agreed upon time to inpect the project and collect information that'll help determine the estimate.
            </div>
        </div>
    )
    if(props.modal === 'Estimate')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                2. Estimate
            </div>
            <div className="modalDescription">
                An estimate will be drawn up with a layout and detailed line items for each charge. This estimate may or may not include permit costs. For most projects the permit costs are included. For special projects, more informationn and collaboration might be required with HOA's and local governments.
            </div>
        </div>
    )
    if(props.modal === 'Permits')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                3. Permits
            </div>
            <div className="modalDescription">
                Once we determine all the required permits and licensing we send in the proper applications and report back to you with updated timelines.
            </div>
        </div>
    )
    if(props.modal === 'Removal')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                4. Removal
            </div>
            <div className="modalDescription">
                For most small to medium sized jobs, we get the old fence removed. We handle all dump costs and services.
            </div>
        </div>
    )
    if(props.modal === 'PostHoles')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                5. Post Holes
            </div>
            <div className="modalDescription">
                Usually on the same day as the removal process we get the hole dug and posts set for the build team. We throw all the dirt into bags and despose of them as well, leaving your new fence looking beautiful without mounds of dirt near the posts.
            </div>
        </div>
    )
    if(props.modal === 'Construct')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                6. Construct Fence 
            </div>
            <div className="modalDescription">
                Usually on the same day as the removal process we get the hole dug and posts set for the build team. We throw all the dirt into bags and despose of them as well, leaving your new fence looking beautiful without mounds of dirt near the posts.
            </div>
        </div>
    )
    if(props.modal === 'CleanUp')
    return(
        <div className="modalBox">
            <div className="modalTitle">
                7. Clean Up
            </div>
            <div className="modalDescription">
                Usually on the same day as the removal process we get the hole dug and posts set for the build team. We throw all the dirt into bags and despose of them as well, leaving your new fence looking beautiful without mounds of dirt near the posts.
            </div>
        </div>
    )

}

export default Modal;