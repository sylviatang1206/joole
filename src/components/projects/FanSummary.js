import React, { Component } from 'react'
import FanDetails from './FanDetails'
import { withRouter } from 'react-router'

const mystyle ={
    margin: "2px"
};


//const fan = props.fan
    //console.log({fan})
    
// const FanSummary = (props) => {
class FanSummary extends Component{
    constructor(props){
        super(props)
    }

    // const id = fan.id
     fanDetail(fanid){
        //  e.preventDefault();
        // console.log(id)
        localStorage.setItem("selectFan", fanid)
        this.props.history.push('/project')
        
    }
    
    
    render() {
        //console.log(this.props.fan)
        const fan = this.props.fan
        
        
        return(
            <>
            <div className="card fan-summary col s12 m3" style={mystyle}>
                <a className="right ">Verified 08/21/2016</a>
                <div className="card-image">
                <img src="https://i.postimg.cc/Zn6fNvKV/We-Chat270607bccc80a0a218e89e8b49b28c54.png"></img>
                </div>
                
                <div className="indigo-text text-darken-3 center" onClick={()=>this.fanDetail(fan.id)}>
                    {fan.manufacturer} <br/>
                    {fan.series} <br/>
                    {fan.model}
                    </div>
                
                <div className="grey lighten-4 grey-text center">
                    {fan.airflow} CFM <br/>
                    {fan.power_max} W at max speed <br/>
                    {fan.sound} dBA at max speed <br/>
                    {fan.diameter} fan speed diameter
                </div>
                <div className="red-text text-darken-4">
                    Past specifications:
                    0 firm / 1297 global
                </div>
                <div>
                    <label >
                    <input type="checkbox" />
                    <span>Compare</span>
                    </label>
                    <span className="right"><a className="waves-effect waves-light btn-small blue darken-4">Add to</a></span>
                </div>

                
                    <p className="grey-text"></p>
                </div>
                </>
        )
            
        }
}

export default withRouter(FanSummary)
