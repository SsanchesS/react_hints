import './App.sass';
import MyInput from "./components/primer"
import Hover from "./components/Hover.jsx"
import any from "./any.ts"
function App() {
  return (
    <div className="App">
      <MyInput placeholder="usename"/>
      <MyInput placeholder="usepassowrd"/>
      {/* <button onClick={()=>{console.log(usename.value,usepassowrd.value)}}>REZ</button> */}
      <Hover/>
      {any()}









    </div>
  );
}

export default App;
