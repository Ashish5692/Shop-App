import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //reducer functions it takes state and action as parameter
        add:(state,action) => {
            //returned new state
            state.push(action.payload); //mutiple values access through action.payload ..anything we passed as input parameter is depicted by action.payload
        },
        remove:(state,action) => {
            //any input parameter will be accessed by action.payload
            //filter is based on id which has come as input to us
            //In this state only retain that item whose id is not equal to action.payload actions's ID
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;