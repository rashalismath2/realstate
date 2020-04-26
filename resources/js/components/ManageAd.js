import React,{Component} from "react"
import ResultList from "./ResultList"
import NewAd from "./NewAd"

class ManageAd extends Component{

    constructor(){
        super()
        this.state={
            clickedNew:true,
            clickedOld:false,
        }
        this.setComponent=this.setComponent.bind(this)
    }

    setComponent(type){
        if(type=="new"){
            this.setState({
                clickedNew:true,
                clickedOld:false
            })
        }
        else{
            this.setState({
                clickedNew:false,
                clickedOld:true
            })
        }
    }

    render(){

        let ren;
            if(this.state.clickedOld){
                ren=<ResultList />
            }
            else{
                ren=<NewAd />
            }
        


        return(

            <section>
                <div className="cont">
                    <div className="managead-containor">
                        <div className="managead-left">
                            <button onClick={()=>{this.setComponent("new")}}>New</button>
                            <button onClick={()=>{this.setComponent("old")}}>Old</button>
                        </div>
                        <div className="managead-right">
                            {ren}
                        </div>
                    
                    </div>

                </div>
            
            </section>
            
        )

    }


}

export default ManageAd