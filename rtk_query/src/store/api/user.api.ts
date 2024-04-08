import { api } from './api';
import {IUser} from "../../models/Models"

export const userApi = api.injectEndpoints({
   endpoints: build => ({
      getUsers: build.query<IUser[], number>({ // второй типо для аргумента который принимает
         query: (limit: number = 5) => ({
            url: '/users',
            params: { // параметры для запроса
               _limit: limit // .../users?_limit=5 - параметр через _ потому что требует api jsonplaceholder
            }
         })
      }),
      createUser: build.mutation({
         query: (user:IUser) => ({
            body: user,
            url: "/",
            method: "POST"
         })
      })
   })
})