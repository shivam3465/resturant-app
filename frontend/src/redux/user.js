import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name: 'user',
    initialState: {
        data: {},
        table: {}
    },
    reducers: {
        setData: (state,action)=>{
            state.data=action.payload;
        },
        setTable: (state,action)=> {
            state.table= action.payload;
        }
    }
})

export const {setData,setTable}=UserSlice.actions;

export const userReducer= UserSlice.reducer;