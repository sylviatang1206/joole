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
        //console.log(this.props);
        const { fans } = this.props;

        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col s12 m2">
                    <Sorting fans={fans}/>
                    </div>
                    <div className="col s12 m10">
                        <span className="indigo-text text-darken-3">Mechanical > </span>
                        <span className="grey-text text-lighten-2">HVAC Fans</span>
        
                        <FanList fans={fans}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fans: state.fan.fans
    }
}

export default connect(mapStateToProps, {fetchFans})(Dashboard)
