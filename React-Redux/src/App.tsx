import React from 'react';
import './App.css';
// import {useDispatch, useSelector} from "react-redux"                // Импортируем тот самый dispatch и useSelector для получения состояния

import {useAppDispatch,useAppSelector} from "./hooks/redux.ts"

import { plus,munis } from './store/reducers/CashSlice.ts'; // action
import { usersFetching } from "./store/reducers/ClientSlice.ts"

// import { addClient,removeClient } from './store/reducers/ClientSlice'; // action


const App = () =>{
  const dispatch = useAppDispatch()

  const {count} = useAppSelector(state=>state.CashReducer)
  // или так
  // const {count} = useSelector((state:TypeState)=>state.CashReducer)

  // const cash = useSelector(state=>state.CashSlice.count)                   // Функция, которая принимает функцию, а та параметром принимает состояние

  // const action_add_cash = {type:"ADD_CASH", payload:{count:5}}
  // const action_remove_cash = {type:"REMOVE_CASH", payload:{count:5}}
  
  const AddCash=()=>{
    dispatch(plus(5))             // тип экшена тулкит уже отдал - это название функции
  }
  const RemoveCash=()=>{
    dispatch(munis(3))
  }
  //
  const GetClientsf=()=>{
    dispatch(usersFetching()) // можно что то передавать, но только 1 аргумент {} или [] или просто id
  }

  const {users,isLoading,error} = useAppSelector(state=>state.ClientReducer)
  let input_name_ref = React.useRef()

  // const AddClientf=()=>{
  //   let name = input_name_ref.current.value
  //   name = {name}
  //   dispatch(addClient(name))            
  // }
  // const RemoveClientf=()=>{
  //   let id = input_name_ref.current.value
  //   id = {id}
  //   dispatch(removeClient(id))          
  // }
return (
  <div className="App">
    <div className="wrap">
      <div className="cash_wrap">
        <div className="cash">Счетчик: {count}</div>
        <div className="btns">
          <button onClick={AddCash}>Добавить 5</button>
          <button onClick={RemoveCash}>Удалить 3</button>
        </div>
      </div>

      <div className="client_wrap">

        <div>{isLoading && <h2>Загрузка...</h2>}</div>
        <div>{error && <h2>Ошибка: {error}</h2>}</div>

        <div className="client">
          {users.map(el=>(
            <div key={el.id}>
              <div>id: {el.id}</div>
              <div>name: {el.name}</div>
              <div>email: {el.email}</div>
            </div>
          ))}
        </div>

        <div className="btns">
          <button onClick={GetClientsf}>Получить всех клиентов</button>
        </div>
      </div>

      {/* <div className="client_wrap">
        <div className="client">{clients ? clients.map(e=><div key={e.id} className="client">{e.id} - {e.name}</div> ) : "Нет клиентов"}</div>
        <div className="name">
          <input ref={input_name_ref} type="text" placeholder='name or id'/>
        </div>
        <div className="btns">
          <button onClick={AddClientf}>Добавить Клиента</button>
          <button onClick={RemoveClientf}>Удалить Клиента</button>
        </div>
      </div> */}

    </div>
  </div>
)}
export default App;