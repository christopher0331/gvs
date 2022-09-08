import React from 'react';

const AdminSelector = (props) => (
    <div>
        <select className='calculatorSelectorField' value={props.fenceType} onChange={props.handleFenceTypeChange}>
            <option value='Select'>Select</option>
            <option value='OneBySixPickets'>1x6 Pickets</option>
            <option value='OneByFourPickets'>1x4 Pickets</option>
            <option value='Horizontal'>Horizontal</option>
            <option value='Horizontal - Boulder'>Horizontal - Boulder</option>

            <option value='BoardOverBoard'>Board Over Board</option>
            <option value='P_BoardOverBoard'>Premium - Board Over Board</option>
            <option value='P_OneBySixPickets'>Premium 1x6 Pickets</option>
            <option value='P_OneByFourPickets'>Premium 1x4 Pickets</option>
            <option value='RanchRail'>Ranch Rail</option>


        </select>   
    </div>
)

export default AdminSelector;