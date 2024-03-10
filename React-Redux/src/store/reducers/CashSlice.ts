import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICashState{
    count:number,
    isLoading: boolean,
    error: string
}
const initialState:ICashState = {
    count:0,
    isLoading:false,
    error:""
}
const CashSlice = createSlice({
    name:"CashSlice",
    initialState,
    reducers:{
        plus:(state,action:PayloadAction<number>)=>{  // action.payload
            state.count += action.payload

            const randomNumber = Math.floor(Math.random() * 101);
            state.count += randomNumber
        },
        munis(state,action:PayloadAction<number>){ // Сокращенный ES6 Синтаксис
            state.count -= action.payload
            
            const randomNumber = Math.floor(Math.random() * 101);
            state.count -= randomNumber
        }
    }
})
export default CashSlice.reducer // .reducer - не забывать, потомучто именно он нужен для store
export const {plus,munis} = CashSlice.actions