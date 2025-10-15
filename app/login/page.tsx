"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { endpoints } from "@/lib/api";

export default function SignInPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Redirect to home if token already exists
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            router.push("/");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch(endpoints.login, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Login failed");

            // Store token
            localStorage.setItem("authToken", data.token);

            setSuccess(true);
            console.log("Login success:", data);

            // Redirect to home page
            router.push("/");
        } catch (err: any) {
            setError(err.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg')",
            }}
        >
            <div className="bg-black bg-opacity-60 p-10 rounded-3xl shadow-xl max-w-md w-full text-white">
                <h2 className="text-3xl font-bold mb-2 text-center">Khmer Angkor</h2>
                <p className="text-sm text-center mb-8 text-gray-300">
                    Welcome back! Sign in to your dashboard
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium mb-1">
                            Username
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter your phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    {success && <p className="text-green-400 text-sm">Login successful!</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-orange-400 text-black font-semibold rounded-lg hover:bg-orange-500 transition disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </div>
    );
}
