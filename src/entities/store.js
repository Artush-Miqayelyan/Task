import { configureStore } from "@reduxjs/toolkit";
import { currentUserSlice } from "./user/userSlice";

export const store = configureStore({
    reducer: {
        currentUser: currentUserSlice
    }
})