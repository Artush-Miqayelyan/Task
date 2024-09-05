import { createSlice } from "@reduxjs/toolkit";

const initialState = null

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state , action) => {
            return action.payload
        }
    }
})

export const { setCurrentUser } = currentUserSlice.actions

export const selectCurrentUser = (state) => state.currentUser

export default currentUserSlice.reducer