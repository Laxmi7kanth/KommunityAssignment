import { Component } from 'react';
import PersonalInfo from "./components/PersonalInfo"
import SelectPlan from "./components/SelectPlan"
import AddOns from "./components/AddOns"
import FinishingUp from "./components/FinishingUp"
import './App.css';

class App extends Component{
  state={page:1,}

  nextFunction=(num)=>{
    console.log(num)
    this.setState({page:num})
  }

  backFunction=(num)=>{
    this.setState({page:num})
  }

  on1click=()=>{
    this.setState({page:1})
  }
  on2click=()=>{
    this.setState({page:2})
  }
  on3click=()=>{
    this.setState({page:3})
  }
  on4click=()=>{
    this.setState({page:4})
  }

  confirmFunction=(msg)=>{
    this.setState({page:msg})
  }

  renderMainContainer=()=>{
    const{page}=this.state
    switch(page){
      case 1:
        return <PersonalInfo nextFunction={this.nextFunction}/>
      case 2:
        return <SelectPlan backFunction={this.backFunction} nextFunction={this.nextFunction}/>
      case 3:
        return <AddOns backFunction={this.backFunction} nextFunction={this.nextFunction}/>
      case 4:
        return <FinishingUp backFunction={this.backFunction} confirmFunction={this.confirmFunction}/>
      case "success":
        return <div>
        <p>Thank You</p>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform</p>
        </div>
        
      default:
        return null
    }
  }

  render(){
    const{page}=this.state
   
    return(
      <div className='bg-container'>
        <ul className='side-container'>
          <li className='li' onClick={this.on1click}>
            <button className={`button${page===1?"app":'no'}`}  >1</button>
            <div>
              <p>STEP 1</p>
              <h1 className='heading'>YOUR INFO</h1>
            </div>
          </li>
          <li className='li' onClick={this.on2click}>
            <button className={`button${page===2?"app":'no'}`}>2</button>
            <div>
              <p>STEP 2</p>
              <h1 className='heading'>SELECT PLAN</h1>
            </div>
          </li>
          <li className='li' onClick={this.on3click}>
            <button className={`button${page===3?"app":'no'}`}>3</button>
            <div>
              <p>STEP 3</p>
              <h1 className='heading'>ADD-ONS</h1>
            </div>
          </li>
          <li className='li' onClick={this.on4click}>
            <button className={`button${page===4?"app":'no'}`}>4</button>
            <div>
              <p>STEP 4</p>
              <h1 className='heading'>SUMMARY</h1>
            </div>
          </li>
        </ul>
        <div className='main-container'>
          {
            this.renderMainContainer()
          }
        </div>
      </div>
    )
  }
}
export default App;
