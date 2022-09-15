import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;

export const registerFormSlice = createSlice({
  name: "stage-change",
  initialState,
  reducers: {
    changeFormStage: (state, action) => {
      return (state = action.payload);
    },
  },
});

// action creators
export const { changeFormStage } = registerFormSlice.actions;

export default registerFormSlice.reducer;
