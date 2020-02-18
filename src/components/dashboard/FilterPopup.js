import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import * as actions from '../../store/actions/authActions'
import { connect } from 'react-redux'


const formStyle = {
    display: 'inline',
}
const inputStyle = {
    border:'solid',
    borderColor: 'rgb(197, 192, 192)',
    borderWidth: '0.5px',
    width: '2.2rem',
    height: '1rem',
    fontSize: '0.8rem',
    color: 'rgb(65, 62, 62)'
}
const tableStyle = {
    padding:'0'
}
const selectStyle = {
    display: 'inline',
}
class FilterPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            airflowFilter: [5000, 10000]
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        //this.props.userLogin(this.state);
    }

    render() {
        console.log(this.props)
        return (
            <>
                <Popup trigger={<a className="col grey white-text"> Save </a>} modal>
                    {close => (
                        <div className="card">
                            <div className="card-content">
                                <div className="grey white-text">Find fans</div>
                                <div className="grey lighten-3">Type</div>
    
                             
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={tableStyle}>Use Type</td>
                                            <td style={tableStyle}><form action="#" style={formStyle}>
                                        <label>
                                            <input className="with-gap grey" name="group1" type="radio" checked />
                                            <span>Commercial </span>
                                        </label>

                                        <label>
                                            <input className="with-gap" name="group1" type="radio" />
                                            <span>Industrial </span>
                                        </label>


                                        <label>
                                            <input className="with-gap" name="group1" type="radio" />
                                            <span>Residential</span>
                                        </label>


                                    </form></td>
                                        </tr>
                                        <tr>
                                            <td style={tableStyle}>Application</td>
                                            <td style={tableStyle}>  <form action="#" style={formStyle}>
                                        <label>
                                            <input className="with-gap grey" name="group1" type="radio" checked />
                                            <span>Indoor </span>
                                        </label>

                                        <label>
                                            <input className="with-gap" name="group1" type="radio" />
                                            <span>Outdoor </span>
                                        </label>
                                    </form></td>
                                        </tr>
                                        <tr>
                                            <td style={tableStyle}>Mounting location</td>
                                            <td style={tableStyle}><form action="#" style={formStyle}>
                                        <label>
                                            <input className="with-gap grey" name="group1" type="radio" checked />
                                            <span>Roof </span>
                                        </label>

                                        <label>
                                            <input className="with-gap" name="group1" type="radio" />
                                            <span>Wall </span>
                                        </label>
                                        <label>
                                            <input className="with-gap" name="group1" type="radio" />
                                            <span>Free standing </span>
                                        </label>
                                    </form></td>
                                        </tr>
                                        <tr>
                                            <td style={tableStyle}>Accessories</td>
                                            <td style={tableStyle}><form action="#" style={formStyle}>
                                        <label>
                                            <input className="with-gap grey" name="group1" type="radio" checked />
                                            <span>With light </span>
                                        </label>

                                        <label>
                                            <input className="with-gap" name="group1" type="radio" />
                                            <span>Without light </span>
                                        </label>
                                    </form></td>
                                        </tr>

                                        <tr>
                                            <td style={tableStyle}>Model year</td>
                                            <td style={tableStyle}>   
                                     <input style={inputStyle} value={this.props.modelYearStart}/>
                                     -
                                    <input style={inputStyle} value={this.props.modelYearEnd}/>
                                    
                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                
                                <div className="grey lighten-3">Technical Details</div>
<table>
    <tbody>
    <tr>
        <td style={tableStyle}>Airflow(CFW)</td>
        <td style={tableStyle}><input style={inputStyle} type="text" value={this.props.airflowFilter[0]} /> 
        -
              <input style={inputStyle} type="text" value={this.props.airflowFilter[1]} /></td>
    </tr>
    <tr>
        <td style={tableStyle}>Max power(W)</td>
        <td style={tableStyle}><input style={inputStyle} type="text" value='0' /> 
        -
              <input style={inputStyle} type="text" value="100" /></td>
    </tr>
    <tr>
        <td style={tableStyle}>Sound at max speed(dBA)</td>
        <td style={tableStyle}><input style={inputStyle} type="text" value='0' /> 
        -
              <input style={inputStyle} type="text" value="100" />
        </td>
    </tr>
    <tr>
        <td style={tableStyle}>Fan sweep diameter(in)</td>
        <td style={tableStyle}><input style={inputStyle} type="text" value='0' /> 
        -
              <input style={inputStyle} type="text" value="100" />
        </td>
    </tr>
    <tr>
        <td style={tableStyle}>Height(in)</td>
        <td style={tableStyle}><input style={inputStyle} type="text" value='0' /> 
        -
              <input style={inputStyle} type="text" value="100" />
        </td>
    </tr>
    </tbody>
</table>
<div className="grey lighten-3">Brand</div>
<table>
    <tbody>
        <tr>
            <td style={tableStyle}>Select Brand(s)</td>
            <td style={tableStyle}>
            <select  style={selectStyle} id="cars">
  <option value="volvo">Big Ass</option>
  <option value="saab">Minka</option>
  <option value="opel">Emerson</option>
  <option value="audi">Westinghouse</option>
</select>
            </td>
        </tr>
    </tbody>
</table>
                                
                            </div>
                            <button
                                className="btn-small grey"
                                onClick={() => {
                                    console.log("modal closed ");
                                    close();
                                }}
                            >
                                close
                            </button>
                            <button className="btn-small indigo right" onClick={this.handleSubmit}>Search</button>

                        </div>
                    )}
                </Popup>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    console.log(state.filter.airflowFilter)
    return {
        airflowFilter: state.filter.airflowFilter,
    }

}
const mapDispatchToProps = dispatch => {
    // return{
    //     airflowFilter: (dispatch) => {
    //         actions.addAirflowFilter()
    //     } 
    // }

}
export default connect(mapStateToProps, null)(FilterPopup);