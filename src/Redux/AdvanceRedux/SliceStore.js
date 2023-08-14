import {configureStore} from "@reduxjs/toolkit"
import {countReducer} from "./SliceReducer"


export const SliceStore = configureStore({
    reducer : {
        counter:countReducer
    }
})