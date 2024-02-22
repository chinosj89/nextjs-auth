/* eslint-disable react/jsx-key */
"use client";
import { useState } from 'react'
import Layout from '../components/Layout';
export default function Todos() {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    return (
        <Layout>
            <div className=" min-h-screen flex flex-col items-center gap-8 pt-8 bg-gradient-to-r from-indigo-100 to-indigo-500">
                <div className="text-2xl">Todo List Nextjs</div>
                <div className="flex gap-2">
                    <input
                        className='text-xl text-black rounded-md shadow-md'
                        type="text"
                        placeholder="Enter Todo"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}>
                    </input>
                    <button className='text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1'>ADD</button>
                    <button className='text-xl shadow-md bg-gray-600 text-white hover:bg-gray-500 rounded-md px-3 py-1'>DELETE</button>
                </div>
                <div className="w-5/6 flex flex-col gap-2">
                    {todos.map((todo, index) => {
                        return (
                            <div className="bg-violet-600 rounded-md p-2 text-white flex justify-between items-center shadow-lg">
                                <div className="flex gap-2">
                                    <input type="checkbox" />
                                    <div className="text-xl text-white"> Write Code</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className='text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1'>Edit
                                    </button>
                                    <button className='text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1'>Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </Layout >
    )
}