import React from 'react';
import './styles/Calculator.css';
import AdminSelector from './AdminSelector.js';
import GateSelector from './GateSelector';
import { isElementOfType } from 'react-dom/test-utils';
import ProjectOverviewForm from './ProjectOverviewForm.jsx';
import emailjs from 'emailjs-com';
import MarketingForm from './MarketingForm.jsx';

class AdminUse extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            fenceType: "Select",
            gateType: "Select",
            markUp: "Select",
            fenceLength: 0,
            posts: 0,
            rails: 0,
            pickets: 0,
            gates: 0,
            topCaps: 0,
            trim6ft: 0,
            trim8ft: 0,
            postCost: 0,

        }

        this.handleFenceTypeChange = this.handleFenceTypeChange.bind(this);
        this.handleFenceLengthChange = this.handleFenceLengthChange.bind(this);
        this.handleGates = this.handleGates.bind(this);
    }

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
        if(event.target.value === "No Gates"){
            this.setState({
                gateType: event.target.value,
                gates: 0
            }) 

        } else if(event.target.value === "One Gate"){
                this.setState({
                    gateType: event.target.value,
                    gates: 4
                })
      
        } else if(event.target.value === "Two Gates"){
            this.setState({
                gateType: event.target.value,
                gates: 8
            })

        }
    }


    calculateList(){
        if(this.state.fenceType === "OneBySixPickets"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/5)/100);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/8))/100);
                
            let rails = (posts * 3);
            
            this.setState({
                pickets: pickets,
                posts: posts,
                rails: rails + this.state.gates,
                topCaps: 0,
                trim6ft: 0,
                trim8ft: 0,
                

            })

        } else if(this.state.fenceType === "OneByFourPickets"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/3)/100);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/8))/100);

            let rails = (posts * 3);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: rails + this.state.gates,
                topCaps: 0,
                trim6ft: 0,
                trim8ft: 0
            })

        } else if(this.state.fenceType === "P_OneBySixPickets"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/5)/100);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/8))/100);

            let rails = (posts * 3);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: rails + this.state.gates,
                trim6ft: 0,
                trim8ft: posts,
                topCaps: posts
            })

        } else if(this.state.fenceType === "P_OneByFourPickets"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/3)/100);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/8))/100);

            let rails = (posts * 3);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: rails + this.state.gates,
                topCaps: posts,
                trim6ft: 0,
                trim8ft: posts
            })

        } else if(this.state.fenceType === "Horizontal"){
            let posts = Math.ceil(this.state.fenceLength*((100/6)*(0.1)+(100/6))/100);
            let pickets = Math.ceil(this.state.fenceLength*(posts*13)/100);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: posts,
                topCaps: 0,
                trim6ft: posts,
                trim8ft: 0
            })

        } else if(this.state.fenceType === "Horizontal - Boulder"){
            let posts = Math.ceil(this.state.fenceLength*((100/5)*(0.1)+(100/5))/100);
            let pickets = Math.ceil(this.state.fenceLength*(posts*13)/100);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: posts,
                trim6ft: posts,
                trim8ft: 0,
                topCaps: 0,
            })

        } else if(this.state.fenceType === "BoardOverBoard"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/5)/100)*(1.3);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/6))/100);

            let rails = (posts * 3);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: rails + this.state.gates,
                trim6ft: 0,
                trim8ft: 0,
                topCaps: 0
            })

        } else if(this.state.fenceType === "P_BoardOverBoard"){
            let pickets = Math.ceil(this.state.fenceLength*(100*12/5)/100)*(1.3);
            let posts = Math.ceil(this.state.fenceLength*((100/8)*(0.1)+(100/6))/100);

            let rails = (posts * 3);

            this.setState({
                pickets: pickets,
                posts: posts,
                rails: rails + this.state.gates,
                trim6ft: 0,
                trim8ft: posts,
                topCaps: posts
            })
        } 
    }


    render(){
        return(
            <div>
                <div className='calculator'>
                    <div className='calculatorTitle'>
                        Supplies Calculator    
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
                        <GateSelector gateType={this.state.gateType} handleGates={this.handleGates} />
                    </label>

                    <div>Pickets: {this.state.pickets} </div>
                    <div>Posts: {this.state.posts} </div>
                    <div>Rails: {this.state.rails} </div>
                    <div>Top Caps: {this.state.topCaps} </div>
                    <div>Trim Piece (1x4x8 Flat): {this.state.trim8ft} </div>
                    <div>Trim Piece (1x4x6 Flat): {this.state.trim6ft} </div>


                    <button onClick={ ()=>{ this.calculateList() } }> Calculate List </button>

                </div>
                <div>
                    <MarketingForm />    
                </div>

            </div>
        )
    }
}

export default AdminUse;