
import React from "react";

export default function useInput(init_value){
   let [value,setvalue] = React.useState(init_value)
   let onChange =(e)=>{
      setvalue(e.target.value)
      // console.log(value)
   }
   return{
      value,onChange
   }
}