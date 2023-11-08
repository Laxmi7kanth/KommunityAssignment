import {Component} from "react"
import "./index.css"

class PersonalInfo extends Component{
    state={name:"",email:"",num:"",nameErr:"",emailErr:"",numErr:""}

    onButtonClick=()=>{
        const {nextFunction}=this.props
        nextFunction(2)
    }

    onNameChange=(event)=>{
        this.setState({name:event.target.value})
        if(event.target.value===""){
            this.setState({nameErr:"*required"})
        }
        else{
            this.setState({nameErr:""})
        }
    }

    onEmailChange=(event)=>{
        this.setState({email:event.target.value})
        if(event.target.value===""){
            this.setState({emailErr:"*required"})
        }
        else{
            this.setState({emailErr:""})
        }
    }

    onNumberChange=(event)=>{
        this.setState({num:event.target.value})
        if(event.target.value===""){
            this.setState({numErr:"*required"})
        }
        else{
            this.setState({numErr:""})
        }
    }

    render(){
        const{nameErr,emailErr,numErr,name,email,num}=this.state
        return(
            <form className="form-element">
                <h1>Personal Info</h1>
                <p>Please provide your name,email, address, and phone number.</p>
                <p>Name</p>
                <input type="text" className="ip" onChange={this.onNameChange} value={name}/>
                <p>{nameErr}</p>
                <p>Email Address</p>
                <input type="email" className="ip" onChange={this.onEmailChange} value={email}/>
                <p>{emailErr}</p>
                <p>Phone Number</p>
                <input type="text" className="ip" onChange={this.onNumberChange} value={num}/>
                <p>{numErr}</p>
                <br/>
                <button className="btn" onClick={this.onButtonClick}>Next</button>
            </form>
        )
    }
}

export default PersonalInfo