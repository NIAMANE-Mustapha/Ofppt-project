import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offre: [], // Initial state should be an empty array
};

const offreSlice = createSlice({
  name: 'offre',
  initialState,
  reducers: {
    setOffre: (state, action) => {
      state.offre = action.payload; // Update the state with the payload (offers)
    }
  }
});

export const { setOffre } = offreSlice.actions;
export default offreSlice.reducer;
