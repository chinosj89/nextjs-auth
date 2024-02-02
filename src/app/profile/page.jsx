"use client"
import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation';
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

    return (

        <div className="p-12 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-500">
            <div className="p-8 flex flex-col bg-white text-gray-500 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 shadow-2xl">
                <h1>LOADING PROFILE DATA FOR USER. Please wait... </h1>
            </div>
        </div>

    )
}