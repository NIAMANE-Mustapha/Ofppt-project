import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import entrepriseReducer from './entrepriseSlice'
import offreReducer from './offreSlice'

const store=configureStore({
    reducer:{
        user:userReducer,
        entreprise:entrepriseReducer,
        offre: offreReducer,
    }
})

export default store
