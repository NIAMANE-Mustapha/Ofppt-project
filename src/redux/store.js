import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import entrepriseReducer from './entrepriseSlice'

const store=configureStore({
    reducer:{
        user:userReducer,
        entreprise:entrepriseReducer,
    }
})

export default store
