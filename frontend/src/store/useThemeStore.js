import { create } from "zustand";

export const useThemeStore = create ((set) => ({
    theme: localStorage.getItem("connectify-theme") || "night",
    setTheme: (theme) => {
        localStorage.setItem("connectify-theme",theme);
        set({theme})
    },
}));