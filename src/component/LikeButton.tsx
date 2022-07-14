import React, { useState ,useEffect} from "react";
const LikeButton: React.FC =()=>{
    const [like,setLike] =useState(0)
    const [obj,setobj]=useState(true)
    useEffect(()=>{
        document.title=`执行了${like}次`
    })
    return (
        <>
        <button onClick={()=>{setLike(like+1)}}> 
            {like}赞  
        </button>
        <button onClick={()=>{setobj(!obj)}}>
            {obj ? 'ON' : 'OFF'}
        </button>
        </>
    )
}
export default LikeButton