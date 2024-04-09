import React from 'react';
import './App.css';
// import {useDispatch, useSelector} from "react-redux"

import { IUser } from './models/Models';

import {userApi} from './store/api/user.api';

const App = () =>{
  //////////////////////////////////////// RTK_QUERY ////////////////////////////////////////
                                                              // undefined - если аргументы не нужны
  const {data,isLoading,error,refetch} = userApi.useGetUsersQuery(5,{ // pollingInterval - чтобы делать запрос через 1 (это 1000 милисек) сек например
    // pollingInterval: 60000 
  })
  const users = data
                      // чтобы названия не конфликтовали
  const [createUser,{data:createData,isLoading:createIsLoading,error:createError}] = userApi.useCreateUserMutation() // {selectFromResult} - получение отфильтрованных данных например - пока хз как
                                                                          // skip: !userId тогда не выполняем, крч много всего есть
  const user = data
  const CreateUser_RTK_QUERY_f= async()=>{
    const name = "name"
    const email = "email"
    await createUser({name,email} ) //  as IUser к чему
    .then(onfulfilled=>{ // Если успешно, но я хз
      console.log("Успешно")
    })
    console.log("createData: ", createData)
    console.log("createIsLoading: ", createIsLoading)
    console.log("createError: ", createError)
  }

return (
  <div className="App">
    <div className="wrap">

      <div className="client_wrap">

        <div>{isLoading && <h2>Загрузка...</h2>}</div>
        <div>{error && <h2>Ошибка</h2>}</div>
        <button onClick={()=>refetch()}>Подгрузить данные заного</button>  

        <div className="client">
          {users && users.map((el:IUser)=>(
            <div key={el.id}>
              <div>id: {el.id}</div>
              <div>name: {el.name}</div>
              <div>email: {el.email}</div>
            </div>
          ))}
        </div>

        <div className="btns">
          <button onClick={CreateUser_RTK_QUERY_f}>Создать user RTK QUERY</button>
        </div>
      </div>
    </div>
  </div>
)}
export default App;