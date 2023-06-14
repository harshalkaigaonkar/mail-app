import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: true,
    mails: null,
}

export const fetchMails = createAsyncThunk(
    'mail/fetchByIdStatus',
    async () => {
      const response = await axios.get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123")
      return response.data
    }
  )

export const mailSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [fetchMails.pending]: state => {
        state.loading = true;
    },
    [fetchMails.fulfilled]: (state, {payload}) => {
        state.loading = false;
        state.mails = payload;
    } 
  },
  reducers: {
  }
})

export const selectLoading = (state) => state.mail.loading;
export const selectMails = (state) => state.mail.mails;

export default mailSlice.reducer