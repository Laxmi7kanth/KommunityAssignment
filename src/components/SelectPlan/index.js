import { Component} from "react"
import "./index.css"

class SelectPlan extends Component{
    state={}

    onSelectBtnClick=()=>{
        const{nextFunction}=this.props
        nextFunction(3)
    }

    onBlackClick=()=>{
        const{backFunction}=this.props
        backFunction(1)
    }

    render(){
        return(
            <div>
                <h1>SELECT YOUR PLAN</h1>
                <p>You have the option of monthly or yearly billing.</p>
                <ul className="selUl">
                    <li>
                        <h1>Arcade</h1>
                        <p>$9/mo</p>
                    </li>
                    <li>
                        <h1>Arcade</h1>
                        <p>$9/mo</p>
                    </li>
                    <li>
                        <h1>Arcade</h1>
                        <p>$9/mo</p>
                    </li>
                </ul>
                <div className="btn-container">
                    <button onClick={this.onBlackClick} className="btn">Go Back</button>
                    <button onClick={this.onSelectBtnClick} className="btn">Next Step</button>
                </div>
            </div>
        )
    }
}

export default SelectPlan