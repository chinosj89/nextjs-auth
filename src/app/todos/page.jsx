"use client";
import { useState } from 'react'
export default function Todos() {
    const [inputText, setInputText] = useState("")

    return (
        <div className="">
            <div className="text-2xl">Todo List Nextjs</div>
            <div className="">
                <input type="text" placeholder="Enter Todo" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
            </div>
        </div>
    )
}