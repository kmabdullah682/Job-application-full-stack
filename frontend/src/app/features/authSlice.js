import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        // Call this when the user clicks "Logout"
        clearAuthUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;