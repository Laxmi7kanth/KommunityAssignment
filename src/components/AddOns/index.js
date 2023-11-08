import { Component} from "react"
import "./index.css"

class AddOns extends Component{
    state={}

    onSelectBtnClick=()=>{
        const{nextFunction}=this.props
        nextFunction(4)
    }

    onBlackClick=()=>{
        const{backFunction}=this.props
        backFunction(2)
    }


    render(){
        return(
            <div>
                <h1>Pick add-ons</h1>
                <p>Add-ons help your gaming experience.</p>
                <ul>
                    <li className="li">
                        <input type="checkbox"/>
                        <div>
                        <p>Arcade</p>
                        <p>$9/mo</p>
                        </div>
                        <p>+$1/mo</p>
                    </li>
                    <li className="li">
                        <input type="checkbox"/>
                        <div>
                        <p>Arcade</p>
                        <p>$9/mo</p>
                        </div>
                        <p>+$1/mo</p>
                    </li>
                    <li className="li">
                        <input type="checkbox"/>
                        <div>
                        <p>Arcade</p>
                        <p>$9/mo</p>
                        </div>
                        <p>+$1/mo</p>
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

export default AddOns