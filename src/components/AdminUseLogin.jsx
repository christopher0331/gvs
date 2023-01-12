import React from 'react';
import AdminUse from './AdminUse.js';
import MaterialCostCalculator from './MaterialsCostCalculator.jsx';

class AdminUseLogin extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: "",
            verify: "fencingis$123",
            login: false
        }


        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    setUserName = (username) => {
        this.setState({
            username: username
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password
        })
    }

    handleUserNameChange = (event) => {
        this.setUserName(event.target.value);
    };

    handlePasswordChange = (event) => {
        this.setPassword(event.target.value);
    };


    checkCredentials = () => {
        console.log(this.state.login, this.state.password, this.state.username)
        if(this.state.password === "fencingis$123"){
            this.setState({
                login: true,
            })
        }
         else {
            this.setState({
                login: false,
            });
         }
    }


    render(){

        if(this.state.login){
            return (
                <div>
                    <AdminUse />
                    <MaterialCostCalculator />
                </div>
            )

        } else {
            return (
                <div>

                    <form>
                        <label>UserName</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            onChange={this.handleUserNameChange}
                            value={this.state.username}
                        />
                        
                        <label>Password</label>
                        <input 
                            type="text"
                            id="password"
                            name="password"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        />

                        <button onClick={ () => this.checkCredentials() }> Submit </button>
                    </form>

                </div>
            )
        }
    }
}


export default AdminUseLogin;