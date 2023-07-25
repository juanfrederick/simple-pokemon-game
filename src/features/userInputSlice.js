import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  ballChosed: null,
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    usernameChange: (state, action) => {
      state.username = action.payload;
    },
    emailChange: (state, action) => {
      state.email = action.payload;
    },
    passwordChange: (state, action) => {
      state.password = action.payload;
    },
    repeatPasswordChange: (state, action) => {
      state.repeatPassword = action.payload;
    },
    clearUserInput: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.repeatPassword = "";
      state.ballChosed = null;
    },
    choseBall: (state, action) => {
      state.ballChosed = action.payload;
    },
  },
});

export const {
  usernameChange,
  emailChange,
  passwordChange,
  repeatPasswordChange,
  clearUserInput,
  choseBall,
  setShowBox,
} = userInputSlice.actions;
export default userInputSlice.reducer;
