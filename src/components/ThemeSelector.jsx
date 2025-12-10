import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import { FaCircle, FaCheck } from "react-icons/fa";
import { BsPalette } from "react-icons/bs";

const themes = [
    { id: "theme-aurora", label: "Aurora", color: "#6366F1" },
    { id: "theme-nebula", label: "Nebula", color: "#0EA5E9" },
    { id: "theme-sunsetglow", label: "Sunsetglow", color: "#10B981" },
    { id: "theme-forestmist", label: "forestmist", color: "#EF4444" },
    { id: "theme-cyberwave", label: "Cyberwave", color: "#60A5FA" },
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
                <span className="font-semibold">{selected?.label}</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute top-14 left-[-150px] w-48 bg-white shadow-xl rounded-xl z-50 p-2">
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
