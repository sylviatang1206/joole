import React, { Component } from 'react'
import M from "materialize-css";
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import { SliderRail, Handle, Track, Tick } from './Rail'



// this.props.defaultValue÷
const sliderStyle = {
    position: 'relative',
    width: '100%',  
}

export class SliderRange extends Component {

    state = {
        id: 0,
        domain:[0,1],
        values: [0,1],
        update: [0,1],
        name: ""

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

    onChange = (values) => {
        this.setState({ values })
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
            onChange={this.onChange}
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

export default SliderRange
