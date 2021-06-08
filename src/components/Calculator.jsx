import React from 'react';
import './styles/Calculator.css';
import Selector from './Selector.jsx';

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fenceLength: 0,
            fenceType: '',
            removal: false,
            costPerFoot: 31,
            removalCostPerFoot: 10
        }

        this.handleFenceLengthChange = this.handleFenceLengthChange.bind(this);
        this.handleFenceTypeChange = this.handleFenceTypeChange.bind(this);
        this.handleRemovalChange = this.handleRemovalChange.bind(this);
        this.updateFence = this.updateFence.bind(this);
    }

    updateFence(fenceType) {
        if(fenceType.target.value === 'StandardPickets'){
            this.setState({
                fenceType: fenceType.target.value,
                costPerFoot: 31,
                removalCostPerFoot: 10
            })
        } 
        if(fenceType.target.value === 'PremiumPickets'){
            this.setState({
                fenceType: fenceType.target.value,
                costPerFoot: 41,
                removalCostPerFoot: 10
            })
        }
        if(fenceType.target.value === 'RanchRail'){
            this.setState({
                fenceType: fenceType.target.value,
                costPerFoot: 45,
                removalCostPerFoot: 15
            })
        }
        if(fenceType.target.value === 'WireFencing'){
            this.setState({
                fenceType: fenceType.target.value,
                costPerFoot: 28,
                removalCostPerFoot: 15
            })
        }
        if(fenceType.target.value === 'WroughtIron'){
            this.setState({
                fenceType: fenceType.target.value,
                costPerFoot: 61,
                removalCostPerFoot: 25
            })
        }
        if(fenceType.target.value === 'CompositeFence'){
            this.setState({
                fenceType: fenceType.target.value,
                costPerFoot: 81,
                removalCostPerFoot: 30
            })
        }
    }

    handleFenceLengthChange(event){
        this.setState({
            fenceLength: event.target.value
        })
    }

    handleFenceTypeChange(event){
        this.setState({
            fenceType: event.target.value
        })
    }

    handleRemovalChange(event){
        if(this.state.removal === false){
            this.setState({
                removal: true
            })
        }
        if(this.state.removal === true){
            this.setState({
                removal: false
            })
        }
    }


    render(){
        if(this.state.removal === false){
            return(
                <div className='calculator'>
                    <div className='calculatorTitle'>
                        Fencing Cost Calculator
                    </div>
                    <label className="calculatorInputs">
                        <div className="inputTitles">Fence Length(Ft)</div> 
                        <input className='calculatorLengthField' placeholder="150" type="number" onChange={this.handleFenceLengthChange}></input>
                    </label>
                    <label className="calculatorInputs">
                    <div className="inputTitles"> Fence Type </div>
                        <Selector fenceType={this.state.fenceType} updateFence={this.updateFence} />
                    </label>
                    <label className="calculatorInputs">
                    <div className="inputTitles"> Fence Removal </div>
                        <label className="checkboxInput">
                           Yes
                            <input className='calculatorCheckBoxField' placeholder="Yes" type="checkbox" value="true" onChange={this.handleRemovalChange}/>
                        </label>
                    </label>
    
                    <div>
                        Total: ${this.state.fenceLength * this.state.costPerFoot}
                    </div>
                </div>
            )
        } else if(this.state.removal === true){
            return(
                <div className='calculator'>
                    <div className='calculatorTitle'>
                        Fencing Cost Calculator
                    </div>
                    <label className="calculatorInputs">
                        <div className="inputTitles">Fence Length(Ft)</div> 
                        <input className='calculatorLengthField' placeholder="150" type="number" onChange={this.handleFenceLengthChange}></input>
                    </label>
                    <label className="calculatorInputs">
                    <div className="inputTitles"> Fence Type </div>
                        <Selector fenceType={this.state.fenceType} updateFence={this.updateFence} />
                    </label>
                    <label className="calculatorInputs">
                    <div className="inputTitles"> Fence Removal </div>
                        <label className="checkboxInput">
                           Yes
                            <input className='calculatorCheckBoxField' placeholder="Yes" type="checkbox" value="true" onChange={this.handleRemovalChange}/>
                        </label>
                    </label>
    
                    <div>
                        Total: ${this.state.fenceLength * this.state.costPerFoot + this.state.fenceLength * this.state.removalCostPerFoot}
                    </div>
                </div>
            )
        }
    }
}

export default Calculator;