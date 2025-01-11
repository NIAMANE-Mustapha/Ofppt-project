import { createSlice } from "@reduxjs/toolkit"


const initialState={
    entreprise:{},
    token:''
}

const entrepriseSlice=createSlice({
    name:'entreprise',
    initialState,
    reducers:{
        setEntreprise:(state,action)=>{
            state.entreprise=action.payload
        },
        setEntToken:(state,action)=>{
            state.token=action.payload
        }
    }
})

export const {setEntreprise,setEntToken}=entrepriseSlice.actions
export default entrepriseSlice.reducer
