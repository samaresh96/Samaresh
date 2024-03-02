import {configureStore} from "@reduxjs/toolkit"
import {reducer1 } from "../Slices/slice1"
import {reducer2 } from "../Slices/slice2"
 export const store = configureStore({
    reducer:{
    reducer1,
    reducer2
    
    }
})
