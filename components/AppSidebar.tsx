"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { HomeIcon, FolderIcon, SettingsIcon } from "lucide-react";

export function AppSidebar() {
    return (
        <Sidebar className="w-64 bg-white dark:bg-gray-900">
            {/* Header */}
            <SidebarHeader>
                <h2 className="text-lg font-bold px-4 py-2">My App</h2>
            </SidebarHeader>

            {/* Sidebar Content */}
            <SidebarContent>
                {/* First group */}
                <SidebarGroup>
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <HomeIcon className="w-5 h-5" />
                        Home
                    </Link>
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <HomeIcon className="w-5 h-5" />
                        Dashboard
                    </Link>
                </SidebarGroup>

                {/* Second group */}
                <SidebarGroup>
                    <Link
                        href="/projects"
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <FolderIcon className="w-5 h-5" />
                        Projects
                    </Link>
                    <Link
                        href="/settings"
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <SettingsIcon className="w-5 h-5" />
                        Settings
                    </Link>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="px-4 py-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Version 1.0
                </p>
            </SidebarFooter>
        </Sidebar>
    );
}
