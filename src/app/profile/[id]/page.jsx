"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
export default function UserProfile({ params }) {
    const router = useRouter();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users/me');
                setUserData(response.data.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    const logout = async () => {
        try {
            // added /api instead of just api and worked due to the file structure
            await axios.get('/api/users/logout')
            router.push('/login')
            // add toast success
        } catch (error) {
            console.log(error.message);
            // add toast
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {userData ? (
                <>
                    <h1 className="text-4xl">Profile</h1>
                    <hr />
                    <p>Hello, {userData.username}</p>
                    <button className="p-2 mb-1 border rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 ..."
                        onClick={logout}>
                        Logout
                    </button>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    )
}