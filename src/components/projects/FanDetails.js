import React from 'react'

const FanDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section fan-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">fan title - {id}</span>
                    <p>Airfoils – Moso bamboo – 60” diameter
                        Airfoil Finishes – Caramel Bamboo or Cocoa Bamboo
                        Hardware Finishes – Satin Nickel, Oil-Rubbed Bronze, Black or White
                        Motor – EC motor with digital inverter drive</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Product Documentation</div>
                </div>
            </div>
            
        </div>
    )
}

export default FanDetails
