
import { createSlice } from '@reduxjs/toolkit';

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    quotes: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchQuotesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchQuotesSuccess(state, action) {
      state.loading = false;
      state.quotes = action.payload;
    },
    fetchQuotesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchQuotesStart, fetchQuotesSuccess, fetchQuotesFailure } = quotesSlice.actions;
export default quotesSlice.reducer;
