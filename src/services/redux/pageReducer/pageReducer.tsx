import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

interface PageState {
  page: number;
}

const initialState = { page: 1 } as PageState;

export const page = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.page + 1;
    },
    decrement: (state) => {
      state.page - 1;
    },
    setPage: (state, action) => {
      state.page = action.payload; // mutate the state all you want with immer
    },
  },
});

const pageReducer = combineReducers({
  page: page.reducer,
});

export default pageReducer;
