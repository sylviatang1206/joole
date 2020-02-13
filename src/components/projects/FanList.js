import React from 'react'
import FanSummary from './FanSummary'

const FanList = ({fans}) => {
    return (
        <div className="fan-list section">
            {fans && fans.map(fan =>{
                return(
                    <FanSummary fan={fan} key={fan.id} />
                )
            })}
                
        
        </div>
    )
}

export default FanList
