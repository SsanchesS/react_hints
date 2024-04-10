import React from "react";

export default function useHover(ref){
   const [isHovering,setHovering] = React.useState(false)
   let node = ref.current
   let on =()=>{setHovering(true)}
   let off =()=>{setHovering(false)}

   // node.addEventListener
   return{
      isHovering
   }
}