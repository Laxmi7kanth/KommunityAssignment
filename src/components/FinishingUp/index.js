import { Component} from "react"

class FinishingUp extends Component{
    state={}

    onBlackClick=()=>{
        const{backFunction}=this.props
        backFunction(3)
    }

    onSuccessBtn=()=>{
        const{confirmFunction}=this.props
        confirmFunction("success")
    }

    render(){
        return(
            <div>
                <h1>Finishing Up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="card-container">
                    <div>
                        <div>
                        <h1>Arcade(Monthly)</h1>
                        <button>Change</button>
                        </div>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>Online Service</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>Larger Storage</p>
                        <p>{}</p>
                    </div>
                </div>
                <div>
                        <p>Total</p>
                        <p>{}</p>
                </div>
                    
                <div>
                    <button onClick={this.onBlackClick} className="btn">Go Back</button>
                    <button className="btn" onClick={this.onSuccessBtn}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default FinishingUp