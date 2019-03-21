import React, { useState } from 'react'
//import img from './coeur.png'
import "./Like.css"

const Like = props => {
    const [count, setCount] = useState(0)
    return(
        <div onClick={()=>{setCount(count+1)}}>{count} <button className="a">♥</button></div>
    )
}
export default Like