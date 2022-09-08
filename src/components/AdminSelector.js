import React from 'react';

const AdminSelector = (props) => (
    <div>
        <select className='calculatorSelectorField' value={props.fenceType} onChange={props.handleFenceTypeChange}>
            <option value='Select'>Select</option>
            <option value='OneBySixPickets'>1x6 Pickets</option>
            <option value='OneByFourPickets'>1x4 Pickets</option>
            <option value='RanchRail'>Ranch Rail</option>
            <option value='Horizontal'>Horizontal</option>
        </select>   
    </div>
)

export default AdminSelector;