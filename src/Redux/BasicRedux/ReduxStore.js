import {configureStore} from "@reduxjs/toolkit"
import { reduxReducer } from "./Reducer"




export const BasicStore = configureStore({
  reducer : reduxReducer
})