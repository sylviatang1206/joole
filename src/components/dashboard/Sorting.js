import React, {Component} from 'react'
import M from "materialize-css";
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import { SliderRail, Handle, Track, Tick } from './Rail'

const airflow = [5000,10000]

const sliderStyle = {
    position: 'relative',
    width: '100%',
  }
class Sorting extends Component{
    state = {
        domain: [5000,10000],
        //airflow: {
            // value:
            //id:
        // }
        values: airflow.slice(),
        update: airflow.slice(),

    }

    onChange = (values) => {
        this.setState({ 
            
            values })
    }
    onUpdate = update => {
        this.setState({update})
    }
    setDomain = domain => {
        this.setState({domain})
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
          });
    }
    render(){
        const{
            state: {domain, values, update},
        } = this
        return (
            <div className="">
                <div className="row">
                    <a className="col grey-text text-darken-3">Search: </a>
                    <a className="col grey white-text"> Save </a>
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
                        <div className="collapsible-body white">
                            <a className="grey-text">Model year: </a>
                            <form>
                            <input type="text" value="2010"/>
                            -
                            <input type="text" value="2016"/>
                            </form>                
                        </div>
                    </li>
                    <li>
                    <div className="collapsible-header grey lighten-2">
                    Technical Specifications
                        <i className="tiny material-icons right">expand_more</i>
                        </div>
                        <div className="collapsible-body white">

                            <input type="text" value={update[0]} onChange={this.onChange()}/>
                            <div>{update[0]}</div>
                            <div>{update[1]}</div>
                            <Slider mode={2} step={1} domain={domain} 
                            onUpdate={this.onUpdate} onChange={this.onChange}
                            rootStyle={sliderStyle} values={values}>
                                <Rail>
                                {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                                </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
                            </Slider>
                        </div>
                    </li>
                </ul>

            </div>
        )
}
}

export default Sorting
