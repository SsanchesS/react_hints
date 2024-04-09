// npm install @reduxjs/toolkit

import {configureStore,combineReducers} from "@reduxjs/toolkit"  // создать store а это для обьединения reducers
import ClientSlice from "./reducers/ClientSlice" // - уже с reducer
import { api } from "./api/api"

export const store = configureStore({
    reducer:{
        ClientReducer : ClientSlice,
        [api.reducerPath] : api.reducer // Добавили
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware) // внедрить RTK query
})

export type TypeState = ReturnType<typeof store.getState>
// export type TypeStore = ReturnType<typeof > // хз 
export type TypeDispatch = typeof store.dispatch // Рекомендуется дать типу другое имя, AppDispatch чтобы избежать путаницы, поскольку имя типа Dispatch обычно используется слишком часто