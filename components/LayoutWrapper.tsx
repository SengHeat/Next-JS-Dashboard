"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { NavBar } from "@/components/NavBar";
import React from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Define routes that should NOT show sidebar/navbar
    const authRoutes = ["/login", "/register"];
    const isAuthRoute = authRoutes.includes(pathname);

    if (isAuthRoute) {
        // Only render page content (no sidebar/navbar)
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                {children}
            </div>
        );
    }

    // Default layout (dashboard pages)
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <NavBar />
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
