import { createSlice } from "@reduxjs/toolkit";

const nodeSlice = createSlice({
    name: "node",
    initialState: {
        popUp: {
            isShow: false,
            id: null,
            type: ""
        }
    },
    reducers: {
        chooseNodeAndEffect(state, action) {
            state.popUp = action.payload;
        },
        setPopUpCondition(state, action) {
            state.popUp.isShow = action.payload;
        }
    }
});

export const { chooseNodeAndEffect, setPopUpCondition } = nodeSlice.actions;

export default nodeSlice.reducer;