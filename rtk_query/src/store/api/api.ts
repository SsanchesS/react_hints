import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IUser} from "../../models/Models"

// ТОЛЬКО 1 API в проекте!!!!
export const api = createApi({
   reducerPath: "api",
   tagTypes: ["User"], // для ревалидации - если добавили юзера, чтобы сразу обновились - переобновление состояния
   baseQuery: fetchBaseQuery({  
      baseUrl: "https://jsonplaceholder.typicode.com", // начальный путь для всех адресов - Желательно в .env
      // можно настроить запрос - header для аторизации и т.д
   }),
   endpoints: builder => ({ // Запросы на сервер
      getUsers: builder.query({
         query: () => '/users' // функция, которая возвращает путь
      }),
      createUser: builder.mutation({
         query: (user:IUser) => ({
            body: user,
            url: "/",
            method: "POST"
         })
      })
   })
})

// Для больших приложений: (Если несколько API я хз)                             build - builder - и так и так можно
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ТОЛЬКО 1 API в проекте!!!!
export const api = createApi({
   reducerPath: "api",
         // можно добавить несколько тегов
   tagTypes: ["Users"], // для ревалидации - если добавили юзера, чтобы сразу обновились - переобновление состояния
   baseQuery: fetchBaseQuery({  
      baseUrl: "https://jsonplaceholder.typicode.com", // начальный путь для всех адресов - Желательно в .env
      // можно настроить запрос - header для аторизации и т.д
   }),
   endpoints: build => ({

   })
})