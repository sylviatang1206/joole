import React, { Component } from 'react'
import M from "materialize-css";
import {SliderRange} from '../layout/SliderRange'
import './Sorting.css'
// import Popup from 'reactjs-popup'
import { addAirflowFilter } from '../../store/actions/filterActions'
import FilterPopup from './FilterPopup'
import * as actions from '../../store/actions/filterActions';
import {connect} from 'react-redux';


const inputStyle = {
    border:'solid',
    borderColor: 'rgb(197, 192, 192)',
    borderWidth: '0.5px',
    width: '2.2rem',
    height: '1rem',
    fontSize: '0.8rem',
    color: 'rgb(65, 62, 62)'
}
class Sorting extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            modelYearStart: 2016,
            modelYearEnd: 2020
        }
        // this.AirFlowChange = this.AirFlowChange.bind(this);
    }
    handleChange = (e) => {
       // console.log(e.target)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    AirFlowChange = (filter) => {
       // console.log('I am airflow on change action function: ' + filter);
        this.props.Airflow(filter)
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }
    render() {
        console.log(this.props);
        // const { domain, values, update }= this.state;
        return (
            <div className="">
                <div className={'row'}>
                    <a className="col grey-text text-darken-3">Search: </a>
                    <FilterPopup {...this.state}/>
                    <a className="col offset-m1 grey white-text"> Clear </a>
                </div>
                <div className="row">
                    <div className="col s6 indigo lighten-1 white-text center">Product</div>
                    <div className="col s6 white indigo-text center">Project</div>
                </div>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header grey lighten-2">
                            Product type
                        <i className="tiny material-icons right">expand_more</i>
                        </div>
                        <div className={'collapsible-body white'}id="content">
                            <a className="grey-text">Model year: </a>
                            
                            
                            <input style={inputStyle} type="text" name="modelYearStart" onChange={this.handleChange} value={this.state.modelYearStart}/>
                            -
                            <input style={inputStyle} type="text" name="modelYearEnd" onChange={this.handleChange} value={this.state.modelYearEnd}/>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header grey lighten-2">
                            Technical Specifications
                        <i className="tiny material-icons right">expand_more</i>
                        </div>
                        <div className="collapsible-body white">

                        {/* <button onClick = {AirFlowChange}></button> */}
                        <SliderRange defaultValue= { [5000, 10000] } name={"airflow"} onChange={this.AirFlowChange}></SliderRange>
                        <SliderRange defaultValue= { [100, 1000]  } name={"maxpower"}></SliderRange>
                    
                            
                        </div>
                        
                    </li>
                </ul>


            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
    // userLogin: userInfo => dispatch(actions.userLoginAction(userInfo)),
    // loggedin: () => dispatch(actions.loggedin())
    Airflow: filter => dispatch(actions.addAirflowFilter(filter))

}
}

const mapStateToProps = state => {
    return {
        fans: state.fan.fans,
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Sorting)
