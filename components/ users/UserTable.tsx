"use client";

import { useEffect, useState } from "react";
import UserRow from "./UserRow";

interface User {
    id: number;
    email: string;
    username: string;
    phone: string;
    name: { firstname: string; lastname: string };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: { lat: string; long: string };
    };
}

export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <div className="flex items-center justify-center h-40 text-lg font-medium">
                Loading users...
            </div>
        );

    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="min-w-full text-sm text-gray-700 border-collapse">
                <thead className="bg-gray-100 text-gray-900 text-xs uppercase font-semibold">
                <tr>
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Full Name</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Username</th>
                    <th className="px-4 py-3 text-left">Phone</th>
                    <th className="px-4 py-3 text-left">Address</th>
                    <th className="px-4 py-3 text-left">Geo (Lat, Long)</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, idx) => (
                    <UserRow key={user.id} user={user} index={idx} />
                ))}
                </tbody>
            </table>
            <div className="p-3 text-gray-500 text-sm text-right">
                Total Users: {users.length}
            </div>
        </div>
    );
}
