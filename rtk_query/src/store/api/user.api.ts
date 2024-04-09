import { api } from './api';
import {IUser} from "../../models/Models"

export const userApi = api.injectEndpoints({
   endpoints: build => ({          // или null - если ничего
      getUsers: build.query<IUser[], number>({ // второй типо для аргумента который принимает
         query: (limit: number = 5) => ({
            url: '/users', // можно и тут писать параметры для запроса - '/users/?_sort=id'
            params: { // параметры для запроса
               _limit: limit // .../users?_limit=5 - параметр через _ потому что требует api jsonplaceholder
            }            
         }),
         // providesTags:()=>[{ // тут тоже можно result,error
         //    type: "Users"                                      // Можно так
         // }]
         providesTags: result => ["Users"]  // Привязка тега к запросу типо работает с этим
      }),
      createUser: build.mutation<IUser, IUser>({ // Тип который вернется / и ожидаем аргументом - Что если не указывать?
         query: (user:IUser) => ({            
            url: "/users",
            method: "POST",
            body: user
         }),
         // invalidatesTags: (result,error,id)=>[{ // пока хз зачем result,error
         //    type: "Users",
         //    // id: id // можно по id
         // }]
         invalidatesTags: ["Users"] // указываем, что данные не актуальны
      })
   })
})