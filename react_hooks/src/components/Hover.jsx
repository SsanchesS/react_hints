import React from "react";
import useHover from "../hooks/useHover";
export default function Hover(){
   let ref = React.useRef()
   let isHovering = useHover(ref)
   return(
      <div ref={ref} className="pr" style={{backgroung: isHovering.isHovering ? "red" : "blue"}}></div>
   )
}