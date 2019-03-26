import React, { useState } from 'react'
//import img from './coeur.png'
import "./Like.css"

const Like = props => {
    const [count, setCount] = useState(0)
    return(
    <div className="c">
        <div onClick={()=>{setCount(count+1)}}>{count} <span className="a">♥</span></div>
    </div>
    )
}
export default Like