import React, { Component } from 'react'
import M from "materialize-css";
import {SliderRange} from '../layout/SliderRange'
import './Sorting.css'


class Sorting extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }
    render() {
        // const { domain, values, update }= this.state;
        return (
            <div className="">
                <div className={'row'}>
                    <a className="col grey-text text-darken-3">Search: </a>
                    <a className="col grey white-text"> Save </a>
                    <a className="col offset-m1 grey white-text"> Clear </a>
                </div>
                <div className="row">
                    <div className="col s6 indigo lighten-1 white-text center">Product</div>
                    <div className="col s6 white indigo-text center">Project</div>
                </div>
                <ul className="collapsible" id="collapsible">
                    <li>
                        <div className="collapsible-header grey lighten-2">
                            Product type
                        <i className="tiny material-icons right">expand_more</i>
                        </div>
                        <div className={'collapsible-body white'}id="content">
                            <a className="grey-text">Model year: </a>
                            
                            
                            <input id="inputbox" type="text" value="2016"/>
                            -
                            <input id="inputbox" type="text" value="2020"/>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header grey lighten-2">
                            Technical Specifications
                        <i className="tiny material-icons right">expand_more</i>
                        </div>
                        <div className="collapsible-body white">
                        
                        <SliderRange defaultValue= { [100, 500] } name={"airflow"}></SliderRange>
                        <SliderRange defaultValue= { [100, 1000]  } name={"maxpower"} ></SliderRange>
                        


                            
                        </div>
                        
                        
                    </li>
                </ul>

            </div>
        )
    }
}

export default Sorting
