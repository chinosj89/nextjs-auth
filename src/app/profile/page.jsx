"use client"
import axios from 'axios'
import Link from "next/link";
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';
export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing")

    const getUserDetails = useCallback(async () => {
        try {
            const res = await axios.get('/api/users/me');
            console.log(res.data);
            setData(res.data.data._id);

            // Update URL with the user ID
            router.push(`/profile/${res.data.data._id}`);
        } catch (error) {
            console.log(error.message);
            // Handle error, maybe show a toast
        }
    }, [setData, router]);

    // Use useEffect to fetch user details when the component mounts
    useEffect(() => {
        getUserDetails();
    }, [getUserDetails]);

    const logout = async () => {
        try {
            await axios.get('api/users/logout')
            router.push('/login')
            // add toast success
        } catch (error) {
            console.log(error.message);
            // add toast
        }
    }
    return (
        <Layout>
            <div className="p-12 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-500">
                <div className="p-8 flex flex-col bg-white text-gray-500 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 shadow-2xl">
                    <h1>Profile</h1>
                    <hr />
                    <p>Profile Page</p>

                    <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
                    </Link>}</h2>
                    <hr />
                    <button className="p-2 mb-1 border rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 ..."
                        onClick={logout}>
                        Logout </button>

                    <button className="p-2 mb-1 border rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 ..."
                        onClick={getUserDetails}>
                        getUserDetails </button>

                </div>
            </div>
        </Layout>
    )
}