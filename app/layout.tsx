// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { NavBar } from "@/components/NavBar";
import React from "react";

export const metadata: Metadata = {
    title: "My App",
    description: "Responsive layout with sidebar and navbar",
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
            {/* NavBar (Full Width) */}
            <NavBar />

            {/* Page Content */}
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
        </body>
        </html>
    );
}
