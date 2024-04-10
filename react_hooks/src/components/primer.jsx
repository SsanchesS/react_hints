import useInput from "../hooks/useInput"
export default function MyInput({placeholder}){
   let my_value = useInput("")
   return (
   <input type="text" placeholder={placeholder} value={my_value.value} onChange={my_value.onChange}/>
   )
}