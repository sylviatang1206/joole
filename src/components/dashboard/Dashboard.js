import React, { Component } from 'react'
import Sorting from './Sorting'
import FanList from '../projects/FanList'
import { connect } from 'react-redux'
import {fetchFans} from '../../store/actions/fanActions'


export class Dashboard extends Component {
    componentDidMount(){
        this.props.fetchFans();
    }
    render() {
        console.log('Dashboard', this.props);
        console.log(this.props.airflowFilter);
        
        // if(this.props.airflowFilter){
        //     const { fans } = this.props.fans.filter(fans =>( fans.))
        // }
        // else{
            const  { fans }  = this.props;
            const airflowFilter = this.props.airflowFilter;
            const newFan = fans.filter(function(fan){
                return fan.airflow > airflowFilter[0] && fan.airflow < airflowFilter[1];
            });
            console.log(newFan);
        
        // }

        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col s12 m2">
                    <Sorting />
                    </div>
                    <div className="col s12 m10">
                        <span className="indigo-text text-darken-3">Mechanical > </span>
                        <span className="grey-text text-lighten-2">HVAC Fans</span>
        
                        <FanList fans={newFan}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.filter.airflowFilter)
    return {
        fans: state.fan.fans,
        airflowFilter: state.filter.airflowFilter,
    }
}

export default connect(mapStateToProps, {fetchFans})(Dashboard)
