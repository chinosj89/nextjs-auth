"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            //toast.success("Login Success");
            router.push("/profile")
        } catch (error) {
            console.log("Login failed", error.message);
            //toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="p-12 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-500">
            <div className="p-8 flex flex-col bg-white text-gray-500 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 shadow-2xl">
                <h1>{loading ? "PROCESSING" : "Login"}</h1>
                <hr className="pb-2" />
                <label htmlFor="email">Email:</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <button
                    className="p-2 mb-1 border rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 ..."
                    onClick={onLogin}>{buttonDisabled ? "No Login" : " Login"}
                </button>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link className="text-xs text-gray-500 uppercase" href="/signup">Sign-up Page</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );

}