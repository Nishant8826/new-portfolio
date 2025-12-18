import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import { FaCircle, FaCheck } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";

const themes = [
    // Core (must-have)
    { id: "theme-aurora", label: "Aurora", color: "#6366F1" },        // Indigo – modern SaaS
    { id: "theme-nebula", label: "Nebula", color: "#0EA5E9" },        // Sky blue – clean tech
    { id: "theme-forestmist", label: "Forest Mist", color: "#10B981" }, // Calm green

    // Elegant neutrals
    { id: "theme-graphite", label: "Graphite", color: "#374151" },   // Dark gray – luxury
    { id: "theme-ivory", label: "Ivory", color: "#E5E7EB" },         // Soft light – editorial

    // High-end accent tones
    { id: "theme-royalpurple", label: "Royal Purple", color: "#7C3AED" }, // Creative premium
    { id: "theme-oceanic", label: "Oceanic", color: "#0284C7" },     // Deep blue – enterprise
    { id: "theme-amberglow", label: "Amber Glow", color: "#F59E0B" }, // Gold accent – luxury

    // Dark-first themes
    { id: "theme-obsidian", label: "Obsidian", color: "#020617" },   // Ultra-dark premium
    { id: "theme-midnight", label: "Midnight", color: "#0F172A" },   // Navy dark
];

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme.activeTheme);

    const [open, setOpen] = useState(false);

    const selected = themes.find((t) => t.id === currentTheme);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 p-2 rounded-xl border border-indigo-300 bg-white shadow-md hover:shadow-lg transition"
            >
                <BsPalette className="text-indigo-500" size={20} />
                {/* <span className="font-semibold">{selected?.label}</span> */}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute bottom-14 right-[-150px] w-48 bg-white shadow-xl rounded-xl z-50 p-2">
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => {
                                dispatch(setTheme(theme.id));
                                setOpen(false);
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-lg transition"
                        >
                            <div className="flex items-center gap-2">
                                <FaCircle size={12} color={theme.color} />
                                <span>{theme.label}</span>
                            </div>

                            {/* Checkmark */}
                            {currentTheme === theme.id && (
                                <FaCheck size={14} className="text-gray-800" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeSelector;
