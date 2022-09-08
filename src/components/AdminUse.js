import React from 'react';
import './styles/Calculator.css';
import AdminSelector from './AdminSelector.js';
import GateSelector from './GateSelector';

class AdminUse extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            fenceType: '',
            fenceLength: 0,
            doubleGate: false,
            posts: 0,
            rails: 0,
            pickets: 0,
            gates: "",
        }

        this.handleFenceTypeChange = this.handleFenceTypeChange.bind(this);
        this.handleFenceLengthChange = this.handleFenceLengthChange.bind(this);
        this.handleGates = this.handleGates.bind(this);
        // this.handleFence = this.handleFence.bind(this);
    }


    // handleFence(fenceType) {

    //     if(fenceType.target.value === 'OneBySixPickets'){
    //         this.setState({
    //             fenceType: fenceType.target.value,
    //         })
    //     } 

    //     if(fenceType.target.value === 'OneByFourPickets'){
    //         this.setState({
    //             fenceType: fenceType.target.value,
    //         })
    //     }


    //     if(fenceType.target.value === 'Horizontal'){
    //         this.setState({
    //             fenceType: fenceType.target.value,
    //             costPerFoot: 50,
    //             removalCostPerFoot: 5
    //         })
    //     } 
    //     if(fenceType.target.value === 'RanchRail'){
    //         this.setState({
    //             fenceType: fenceType.target.value,
    //             costPerFoot: 38,
    //             removalCostPerFoot: 5
    //         })
    //     }

    //     // For more fences, add from Calculator.js
    // }

    handleFenceTypeChange(event){
        this.setState({
            fenceType: event.target.value
        })
    }

    handleFenceLengthChange(event){
        this.setState({
            fenceLength: event.target.value
        })
    }


    handleGates(event){      
        this.setState({
            gates: event.target.value
        })
    }


    calculateList(){

        if(this.state.fenceType === "OneBySixPickets"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/5)/100);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/8))/100);

            if(this.state.gates === "No Gates"){
                // One By Six
                let rails = (posts * 3);

                // No Gates
                this.setState({
                    pickets: pickets,
                    posts: posts,
                    rails: rails
                })

            // One Gate
            } else if(this.state.gates === "One Gate"){
                let rails = (posts * 3) + 4;
                this.setState({
                    pickets: pickets,
                    posts: posts,
                    rails: rails
                })

            // Two Gates
            } else if(this.state.gates === "Two Gates"){
                let rails = (posts * 3) + 8;
                this.setState({
                    pickets: pickets,
                    posts: posts,
                    rails: rails
                })

            }

        } else if(this.state.fenceType === "OneByFourPickets"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/5)/100);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/8))/100);

            // One By Four
            if(this.state.gates === "No Gates"){
                // One By Six
                let rails = (posts * 3);

                // No Gates
                this.setState({
                    pickets: pickets,
                    posts: posts,
                    rails: rails
                })

            // One Gate
            } else if(this.state.gates === "One Gate"){
                let rails = (posts * 3) + 4;
                this.setState({
                    pickets: pickets,
                    posts: posts,
                    rails: rails
                })

            // Two Gates
            } else if(this.state.gates === "Two Gates"){
                let rails = (posts * 3) + 8;
                this.setState({
                    pickets: pickets,
                    posts: posts,
                    rails: rails
                })
            }
        }
    }

    render(){
        return(
            <div className='calculator'>
                <div className='calculatorTitle'>
                    Fencing Cost Calculator
                </div>

                <label className="calculatorInputs">
                    <div className="inputTitles">Fence Length(Ft)</div> 
                    <input className='calculatorLengthField' placeholder="100" type="number" onChange={this.handleFenceLengthChange}></input>
                </label>

                <label className="calculatorInputs">
                <div className="inputTitles"> Fence Type </div>
                    <AdminSelector fenceType={this.state.fenceType} handleFenceTypeChange={this.handleFenceTypeChange} />
                </label>
                <label className="calculatorInputs">
                <div className="inputTitles"> Gates </div>                    
                    <GateSelector gates={this.state.gates} handleGates={this.handleGates} />
                </label>

                <div>Pickets: {this.state.pickets} </div>
                <div>Posts: {this.state.posts} </div>
                <div>Rails: {this.state.rails} </div>

                <button onClick={ ()=>{ this.calculateList() } }> Calculate List </button>

            </div>
        )
    }
}

export default AdminUse;