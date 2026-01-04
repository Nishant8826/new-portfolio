import { createSlice } from "@reduxjs/toolkit";

export const STORAGE_KEY = "portfolio_theme";
const savedTheme = localStorage.getItem(STORAGE_KEY);

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        activeTheme: savedTheme || "theme-aurora",
    },

    reducers: {
        setTheme: (state, action) => {
            state.activeTheme = action.payload;
            localStorage.setItem(STORAGE_KEY, action.payload);
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
