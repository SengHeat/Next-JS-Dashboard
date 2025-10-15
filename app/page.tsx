"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {

    const router = useRouter();

    // useEffect(() => {
    //     const token = localStorage.getItem("authToken");
    //     if (!token) {
    //         router.push("/login"); // redirect if not logged in
    //     }
    // }, [router]);

    return (
        <div className="flex min-h-screen flex-col gap-8">
            {/* Dashboard Header */}
            <header>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Dashboard Overview
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Summary of key metrics and performance progress
                </p>
            </header>
        </div>
    );
}

