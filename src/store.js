import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./features/userInputSlice";
import userReducer from "./features/userSlice";
import pokemonReducer from "./features/pokemonSlice";

const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    user: userReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
