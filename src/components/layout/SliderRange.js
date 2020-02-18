import React, { Component } from 'react'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { SliderRail, Handle, Track } from './Rail'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions'
import { addAirflowFilter } from '../../store/actions/filterActions';


const sliderStyle = {
    position: 'relative',
    width: '100%',  
}

export class SliderRange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            domain:[0,1],
            values: [0,1],
            update: [0,1],
            name: ""
        };

        this.onChange = this.onChange.bind(this)
        
    }

    componentDidMount(){

        if(this.props.defaultValue !== undefined){
            this.setState( {
                domain:this.props.defaultValue,
                values:this.props.defaultValue,
                update:this.props.defaultValue,
                name:this.props.name    });
        }
       
        
    }

    onChange = (value1, value2) => {
        // this.setState({ values })
        this.props.onChange([value1, value2])
        //this.props.onChange()
        // this.setState({
        //     update:[value1, value2]
        // })
        
    }
    onUpdate = (update,id) => {
        
        this.setState({ update })
    }
    setDomain = domain => {
        this.setState({ domain })
    }
    render() {
        const { domain, values, update , name}= this.state;
        return (
            <>
                <br/>
                <div>{ name }</div>
            
            
             <div className="left">{update[0]}</div>
             <div className="right">{update[1]}</div>
             
             <Slider
            mode={2}
            step={1}
            domain={domain}

            rootStyle={sliderStyle}
            onUpdate={this.onUpdate}
            onChange={this.props.onChange}
            values={values}
        >
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
            </>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // loggedin: () => dispatch(actions.loggedin())
}
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        //token: state.auth.token,
        //imageurl: state.auth.imageurl
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SliderRange)

