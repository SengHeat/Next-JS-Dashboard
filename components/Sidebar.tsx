"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    Truck,
    ClipboardList,
    Users,
    FileText,
} from "lucide-react";

const menu = [
    {
        label: "Menu",
        items: [
            { name: "Dashboard", icon: LayoutDashboard, href: "/" },
            { name: "Inbound shipments", icon: Package, href: "/inbound" },
            { name: "Container Loading", icon: Truck, href: "/container" },
            { name: "Tracking Monitoring", icon: ClipboardList, href: "/tracking" },
        ],
    },
    {
        label: "Operation",
        items: [
            { name: "Users", icon: Users, href: "/users" },
            { name: "Activity Logs", icon: FileText, href: "/logs" },
        ],
    },
];

export function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white"></div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Web Master</p>
                        <p className="text-xs text-gray-500">v1.0.1</p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
                {menu.map((group) => (
                    <div key={group.label} className="mb-6">
                        <p className="text-xs uppercase text-gray-500 mb-2 px-2">
                            {group.label}
                        </p>
                        <ul className="space-y-1">
                            {group.items.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="text-sm">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
