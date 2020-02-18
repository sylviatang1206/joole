import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import * as actions from '../../store/actions/authActions'
import { connect } from 'react-redux'


class FilterPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            airflowFilter : [0, 100]
        }
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
                                <div>Use Type 
                                    <form action="">
                                    <input className="with-gap" name="group1" id="commercial" type="radio" checked />
                                    <span for="commercial">Commercial</span>
                                    <input className="with-gap" name="group1" id="industrial" type="radio" />
                                    <span for="industrial">Industrial</span>
                                    <input className="with-gap" name="group1" type="radio" />
                                    <span>Residential</span>
                                    </form>
                                    
                                    </div>
                    
                                airflow: <input id="inputbox" type="text" value={this.props.airflowFilter[0]} /> -
              <input id="inputbox" type="text" value={this.props.airflowFilter[1]} /> <br />
                                Max power: <input id="inputbox" type="text" value='0'/> -
              <input id="inputbox" type="text" value="100" />
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