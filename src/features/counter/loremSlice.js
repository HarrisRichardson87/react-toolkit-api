import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const getLorem = createAsyncThunk("lorem/getData", async (args, { dispatch, rejectWithValue }) => {
    try{
        const { data } = await axios.get('https://baconipsum.com/api/?type=test');
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const loremSlice = createSlice({
    name: 'lorem',
    initialState: {
        data: [],
        isSuccess:false,
        message: '',
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getLorem.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getLorem.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.isSuccess = true;
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = payload;
        }
    }
});

export default loremSlice.reducer;