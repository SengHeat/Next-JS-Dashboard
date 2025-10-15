import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata: Metadata = {
    title: "My App",
    description: "Responsive layout with sidebar and navbar",
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <LayoutWrapper>{children}</LayoutWrapper>
        </body>
        </html>
    );
}
