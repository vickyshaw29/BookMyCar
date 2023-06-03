import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInInformation:null
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrigin:(state,action)=>{
            state.origin = action.payload
        },
        setDestination:(state,action)=>{
            state.destination = action.payload
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInInformation = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions
export default navSlice.reducer

//Selectors 
export const selectOrigin = (state:RootState)=>state.nav.origin
export const selectDestination = (state:RootState)=>state.nav.destination
export const selectTravelTimeInFormation = (state:RootState)=>state.nav.travelTimeInInformation