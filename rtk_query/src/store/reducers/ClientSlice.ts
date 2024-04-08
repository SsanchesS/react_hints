import {createSlice} from "@reduxjs/toolkit"
import {IUser} from "../../models/Models"

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

const ClientSlice = createSlice({
    name: "ClientSlice",
    initialState : initialState,
    reducers: {
    }
})
export default ClientSlice.reducer