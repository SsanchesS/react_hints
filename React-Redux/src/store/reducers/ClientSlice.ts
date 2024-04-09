import {PayloadAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {IUser} from "../../models/Models.ts"

interface IUserState{
    users: IUser[],
    isLoading: boolean,
    error: string
}
const initialState:IUserState = {
    users: [],
    isLoading: false,
    error: ""
}

// Новая версия Redux Toolkit 2.0 :

// асинхронный reducer                   <IUser,null> - тоже что отдает/принимает
export const usersFetching = createAsyncThunk( // отдает редюсер и внутри него экшены pending,fulfilled,rejected
    "users/usersFetch", // имя / имя редюсера
    async function(_,{rejectWithValue}){ // thunkAPI.rejectWithValue
        try {
            // const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")

            const response = await axios.get("https://jsonplaceholder.typicode.com/users")

            if(response.status != 200){
                throw new Error("Server Error!")
            }

            const data = response.data
            return data
        } catch (error) {
            return rejectWithValue(error.message) // типо передача методу usersFetching.rejected
        }
    }

)
const ClientSlice = createSlice({
    name: "ClientSlice",
    initialState : initialState,
    reducers: { // ниже его экшены. ClientSlice/usersFetching
    },
    extraReducers: builder => { // жизненные циклы асинхронной функции
        builder
            .addCase(usersFetching.pending,state=>{ // Идет загрузка
                state.isLoading = true
                state.error = ""
            })
            .addCase(usersFetching.fulfilled,(state,action: PayloadAction<IUser[]>)=>{ // Данные получены
                state.isLoading = false
                state.users = action.payload
            })
            .addCase(usersFetching.rejected,(state,action: any)=>{ // Ошибка
                state.error = action.payload
                state.isLoading = false
            })
    }
})
export default ClientSlice.reducer

// Старая версия:

// // асинхронный reducer
// export const usersFetching = createAsyncThunk( // отдает этот reducer (создание с помощью createReducer)
//     "users/usersFetch", // имя / имя reducer
//     async function(_,{rejectWithValue}){ 
            // функцию без названия. Аргументы: 

            // 1 что-то от меня при вызове если ничего - то _, 

            // 2 параметр хз ( не обяз. ), 

            // 3 параметр - опции Здесь могу много че достать, например dispatch, rejectWithValue - передать с case ошибки,
            // getState - так же как с useSelector(но через методы), const users = getState().CashReducer.users - типо изменяем данные для сервера, а dispatch уже для клиента - не проверял
            // Пример с dispatch - допустим На сервере какие-то данные уже удалились, и чтобы не получать их снова, можно просто удалить их на клиенте
            // https://www.youtube.com/watch?v=6RTbC8Acj1M - 25:42

            // https://www.youtube.com/watch?v=6RTbC8Acj1M - 27:40 - Ошибки, нужно обрабатывать для каждого асинхронного отдельно. Можно логику вынести в отдельную фу-ю.

//         try {
//             // const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")

//             const response = await axios.get("https://jsonplaceholder.typicode.com/users")

//             if(response.status != 200){
//                 throw new Error("Server Error!")
//             }

//             const data = response.data
//             return data
//         } catch (error) {
//             return rejectWithValue(error.message) // типо передача методу usersFetching.rejected
//         }
//     }

// )
// const ClientSlice = createSlice({
//     name: "ClientSlice",
//     initialState : initialState,
//     reducers: { // ниже его reducers. ClientSlice/usersFetching
//     },
//     extraReducers: { // жизненные циклы асинхронной функции
//         [usersFetching.pending]: (state)=>{ // Идет загрузка
//             state.isLoading = true
//             state.error = ""         
//         },
//         [usersFetching.fulfilled]: (state,action: PayloadAction<IUser[]>)=>{ // Данные получены
//             state.isLoading = false
//             state.users = action.payload
//         },
//         [usersFetching.rejected]: (state,action: any)=>{ // Ошибка
//             state.error = action.payload
//             state.isLoading = false      
//         },
//     }
// })
// export default ClientSlice.reducer
