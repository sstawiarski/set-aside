import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  collapsed: boolean;
}

const initialState: UIState = {
  collapsed: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //condense category rows (ultimately removes padding)
    toggleCollapse: (state: UIState) => {
      state.collapsed = !state.collapsed;
    }
  }
});

export const { toggleCollapse } = uiSlice.actions;

export default uiSlice.reducer;
