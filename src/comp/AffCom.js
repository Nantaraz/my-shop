import React from 'react'

const AffCom = props =>(
<div>
        {props.coms.length > 0 ? (
          props.coms.map(user => (
                
    <div>{user}</div>
                
           ))
        ) : (
 "")} 
 </div>
    
)
export default AffCom