import React from 'react'
import {RxCrossCircled} from 'react-icons/rx'

function Task({ts, onClick}) {
    return (
        <div style={{background: 'green'}}>
            <h2>{ts.text} <RxCrossCircled style={{color:'white'}} onClick={()=>onClick(ts.id)}/></h2>
        </div>
    )
}
export default Task