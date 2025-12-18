import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        activeTheme: "theme-aurora",
    },

    reducers: {
        setTheme: (state, action) => {
            state.activeTheme = action.payload;
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
