import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonAppear: null,
  level: null,
  isCaught: false,
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonAppear: (state, action) => {
      state.pokemonAppear = action.payload;
    },
    setIsCaught: (state, action) => {
      state.isCaught = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    resetState: (state) => {
      state.pokemonAppear = null;
      state.isCaught = false;
      state.isLoading = false;
      state.level = null;
    },
  },
});

export default pokemonSlice.reducer;
export const {
  setPokemonAppear,
  setIsCaught,
  setIsLoading,
  resetState,
  setLevel,
} = pokemonSlice.actions;
