import React from 'react'
import FanSummary from './FanSummary'

const FanList = ({projects}) => {
    return (
        <div className="fan-list section">
            {projects && projects.map(project =>{
                return(
                    <FanSummary project={project} key={project.id} />
                )
            })}
                
        
        </div>
    )
}

export default FanList
