import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsersApi } from "../../api/users";

const initialCurrentUser = {
    id: null,
}

const initialState = {
    currentUser: initialCurrentUser,
    usersList: [],
    loading: 'idle',
    error: null,
}

export const getUsers = createAsyncThunk(
    'getUsers',
    async () => {
        const response = await getUsersApi();
        return await response.json();
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeCurrentUser: (state, action) => {
            state.currentUser = state.usersList.find(({id}) => id === action.payload) || initialCurrentUser;
        },
    },
    extraReducers: (bulider) => {
        bulider
            .addCase(getUsers.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.usersList = action.payload.users;
                state.loading = 'idle';
                state.error = null;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error;
            })
    },
})

export const { changeCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;