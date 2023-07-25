import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  details: {},
  backpack: [],
  lastRelease: null,
  lastSaved: null,
};

// User Fetch
const fetchDetails = createAsyncThunk("user/fetchDetails", async (email) => {
  const response = await fetch(`http://localhost:3000/user?email=${email}`);
  const data = await response.json();
  return data;
});

const patchUserDetails = createAsyncThunk(
  "user/patchUserDetails",
  async ({ id, value }) => {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await response.json();
    return { data, value };
  }
);

// Pokemon Fetch
const fetchUserPokemon = createAsyncThunk(
  "user/fetchUserPokemon",
  async (email) => {
    const response = await fetch(
      `http://localhost:3000/pokemonSaved?user=${email}`
    );
    const data = await response.json();
    return data;
  }
);

const deletePokemon = createAsyncThunk("user/deletePokemon", async (id) => {
  const response = await fetch(`http://localhost:3000/pokemonSaved/${id}`, {
    method: "DELETE",
  });
  return id;
});

const savePokemon = createAsyncThunk("user/savePokemon", async (value) => {
  const response = await fetch("http://localhost:3000/pokemonSaved", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.details = {};
      state.backpack = [];
      state.lastRelease = null;
    },
    setLastRelease: (state, action) => {
      state.lastRelease = action.payload;
    },
    setLastSaved: (state, action) => {
      state.lastSaved = action.payload;
    },
  },
  extraReducers: (builder) => {
    // User
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      if (action.payload[0] !== undefined) {
        const {
          username,
          basicBall,
          greatBall,
          masterBall,
          wallet,
          pokemonCatched,
          catchAttempts,
          id,
        } = action.payload[0];

        state.details = {
          username,
          basicBall,
          greatBall,
          masterBall,
          wallet,
          pokemonCatched,
          catchAttempts,
          id,
        };
      }
    });

    builder.addCase(patchUserDetails.fulfilled, (state, action) => {
      const { data, value } = action.payload;

      if (value.hasOwnProperty("catchAttempts")) {
        state.details.catchAttempts = state.details.catchAttempts + 1;
      } else if (value.hasOwnProperty("pokemonCatched")) {
        state.details.pokemonCatched = state.details.pokemonCatched + 1;
      } else if (
        value.hasOwnProperty("basicBall") &&
        value.hasOwnProperty("wallet")
      ) {
        state.details.basicBall = value.basicBall;
        state.details.wallet = value.wallet;
      } else if (
        value.hasOwnProperty("greatBall") &&
        value.hasOwnProperty("wallet")
      ) {
        state.details.greatBall = value.greatBall;
        state.details.wallet = value.wallet;
      } else if (
        value.hasOwnProperty("masterBall") &&
        value.hasOwnProperty("wallet")
      ) {
        state.details.masterBall = value.masterBall;
        state.details.wallet = value.wallet;
      } else if (value.hasOwnProperty("basicBall")) {
        state.details.basicBall = state.details.basicBall - 1;
      } else if (value.hasOwnProperty("greatBall")) {
        state.details.greatBall = state.details.greatBall - 1;
      } else if (value.hasOwnProperty("masterBall")) {
        state.details.masterBall = state.details.masterBall - 1;
      } else if (value.hasOwnProperty("wallet")) {
        state.details.wallet = value.wallet;
      }
    });

    // Pokemon
    builder.addCase(savePokemon.fulfilled, (state, action) => {
      state.backpack.push(action.payload);
    });

    builder.addCase(fetchUserPokemon.fulfilled, (state, action) => {
      state.backpack = action.payload;
    });

    builder.addCase(deletePokemon.fulfilled, (state, action) => {
      state.backpack = state.backpack.filter((val) => {
        return val.id !== action.payload;
      });
    });
  },
});

export default userSlice.reducer;
export const { setUser, clearUser, setLastRelease, setLastSaved } =
  userSlice.actions;
export {
  fetchDetails,
  savePokemon,
  patchUserDetails,
  fetchUserPokemon,
  deletePokemon,
};
