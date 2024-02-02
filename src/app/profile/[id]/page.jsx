"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation';
export default function UserProfile({ params }) {
    const router = useRouter();
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
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page
                <span className="p-2 ml-2 rounded bg-teal-500 text-white">{params.id}</span></p>

            <button className="p-2 mb-1 border rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 ..."
                onClick={logout}>
                Logout </button>
        </div>
    )
}