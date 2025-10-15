"use client";

import { useState } from "react";
import { SunIcon, MoonIcon, ChevronDownIcon, GlobeIcon } from "lucide-react";

export function NavBar() {
    const [darkMode, setDarkMode] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    };

    return (
        <header className="flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            {/* Page Title */}
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <span className="block w-6 h-6 bg-gray-900 dark:bg-gray-100 rounded-md"></span>
                Dashboard
            </h1>

            {/* Right Controls */}
            <div className="flex items-center gap-4 relative">
                {/* Language */}
                <div className="relative">
                    <button
                        onClick={() => setLangOpen(!langOpen)}
                        className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <GlobeIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">English</span>
                        <ChevronDownIcon className="w-4 h-4 opacity-70" />
                    </button>
                    {langOpen && (
                        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md z-50">
                            {["English", "Khmer", "Chinese"].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLangOpen(false)}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>

                {/* Profile */}
                <div className="relative">
                    <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://i.scdn.co/image/ab67616d0000b2739a352de7d7100f05e0db147d"
                            alt="User"
                            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700"
                        />
                        <ChevronDownIcon className="w-4 h-4 opacity-70" />
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md z-50">
                            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-sm font-medium">Web Master</p>
                                <p className="text-xs text-gray-500">v1.0.1</p>
                            </div>
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                Settings
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
