import { createSlice } from "@reduxjs/toolkit";

const savedTheme = "theme-aurora";   

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        currentTheme: savedTheme,
    },

    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
