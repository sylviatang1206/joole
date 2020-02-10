import React from 'react'

const FanSummary = ({project}) => {
    return (
            <div className="card z-depth-0 fan-summary col s12 m3">
                <div className="card-content gery-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p> fan details</p>
                    <p className="grey-text">5,467 CFM 21.14 W at max speed 35 dBA at max speed 60” fan sweep diameter</p>
                </div>
            </div>
    )
}

export default FanSummary
