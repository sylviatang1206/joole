import React, { Component } from 'react'
import Sorting from './Sorting'
import FanList from '../projects/FanList'
import { connect } from 'react-redux'


export class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m2">
                    <Sorting />
                    </div>
                    <div className="col s12 m10 offset-m1">
                    <FanList projects={projects}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)
