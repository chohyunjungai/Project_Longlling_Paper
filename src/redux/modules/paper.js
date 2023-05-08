import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    paper: [],
};

const paperSlice = createSlice({
    name: 'paper',
    initialState,
    reducers: {}
})

export default paperSlice.reducer