// npm install @reduxjs/toolkit

import {configureStore,combineReducers} from "@reduxjs/toolkit"  // создать store а это для обьединения reducers
import CashSlice  from "./reducers/CashSlice.ts" // - уже с reducer
import ClientSlice from "./reducers/ClientSlice.ts" // - уже с reducer

// const rootReducer = combineReducers({
//     CashSlice,
//     ClientSlice
// })
// export const store = configureStore({
//     reducer:rootReducer,
// })

export const store = configureStore({
    reducer:{
        CashReducer : CashSlice,
        ClientReducer : ClientSlice
    }
})

export type TypeState = ReturnType<typeof store.getState>
// export type TypeStore = ReturnType<typeof > // хз 
export type TypeDispatch = typeof store.dispatch // Рекомендуется дать типу другое имя, AppDispatch чтобы избежать путаницы, поскольку имя типа Dispatch обычно используется слишком часто