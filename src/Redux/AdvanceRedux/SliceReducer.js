import { createSlice } from "@reduxjs/toolkit";



export const CountSlice = createSlice({
    name:"counter",
    initialState:{
        value : 0
    },
    reducers:{
        increment:(state,action)=>{
            state.value += 1
        }
    }
})
export const {increment} = CountSlice.actions

export default CountSlice.reducer