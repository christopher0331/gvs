
const GateSelector = (props) => (
    <div>
        <select className='calculatorSelectorField' value={props.gateType} onChange={props.handleGates}>
            <option value={"Select"}>Select</option>
            <option value={"No Gates"}>No Gates</option>
            <option value={"One Gate"}>One Gate</option>
            <option value={"Two Gates"}>Two Gates</option>
        </select>   
    </div>
)

export default GateSelector;