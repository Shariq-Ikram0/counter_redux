import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter :0,
};

const counterSlicer = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCounter:(state,action)=>{
           state.counter = ++state.counter  ;
        },
        subCounter:(state,action)=>{
            state.counter = state.counter > 0 ? -- state.counter:0;
         },
    },
})

const {actions , reducer} = counterSlicer;
export const {addCounter,subCounter}=actions;
export default reducer;
