import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollableAnchor, { configureAnchors, goToTop } from 'react-scrollable-anchor'
import { NavLink } from 'react-router-dom'

const fixStyle = {
    overflow: 'scroll',
    height:'500px'
}

export class FanDetails extends Component {
    componentWillMount() {
        configureAnchors({offset: -60, scrollDuration: 200})
        goToTop()
      }


    
    render() {
        const selectedFanId = localStorage.getItem("selectFan");
        console.log(this.props.fans[selectedFanId])
        const fan = this.props.fans[selectedFanId]

        return (
            <>
                <span className="indigo-text text-darken-3">Mechanical > </span>
                <NavLink to='/'><span className="grey-text text-lighten-2">HVAC Fans > </span></NavLink>
                        
                <span className="grey-text text-lighten-1"> {fan.manufacturer} </span>
                <div>
                <img src="https://i.postimg.cc/Zn6fNvKV/We-Chat270607bccc80a0a218e89e8b49b28c54.png"  width="80em"></img>
        <h4 className="indigo-text text-darken-3">{fan.manufacturer} / {fan.series} / {fan.model} </h4> <span className="red-text text-darken-4"></span>
        <button className="btn-small right">Add to</button>
        <div>
        <a href='#section1' className="grey white-text" width="50em"> Product Summary  |</a>
        <a href='#section2' className="grey white-text"> Product Details  |</a>
        <a href='#section3' className="grey white-text"> Product Documentation   |</a>
        <div style={fixStyle}>
        <ScrollableAnchor id={'section1'}>
          <div> 
          <img src="https://i.postimg.cc/NfRbmm2H/Screen-Shot-2020-02-17-at-11-54-55-PM.png" width="1200px"/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div> 
              <img src="https://i.postimg.cc/NFc2c9s3/Screen-Shot-2020-02-17-at-11-55-04-PM.png"  width="1200px"/> </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div> 
              <img src="https://i.postimg.cc/zXD3F1VF/Screen-Shot-2020-02-17-at-11-55-14-PM.png"  width="1200px"/> </div>
        </ScrollableAnchor>
        </div>
      </div>

                </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fans: state.fan.fans
    }
}

export default connect(mapStateToProps, )(FanDetails)
