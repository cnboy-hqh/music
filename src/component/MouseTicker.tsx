import React, { useState ,useEffect} from "react";
const MouseTicker:React.FC=()=>{
   const [positions,setPositions] =useState({x:0,y:0})
   useEffect(()=>{
    const updateMouse=(e:MouseEvent)=>{
        setPositions({x:e.clientX,y:e.clientY})
    }
    document.addEventListener('click',updateMouse)
   })
   return(
    <>
    <p> 
          X:{positions.x},Y:{positions.y}
    </p>
    </>
   )
}
export default MouseTicker