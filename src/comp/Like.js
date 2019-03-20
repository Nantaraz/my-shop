import React, { useState } from 'react'

const Like = props => {
    const [count, setCount] = useState(0)
    return(
        <div onClick={()=>{setCount(count+1)}}>coeur {count}</div>
    )
}
export default Like