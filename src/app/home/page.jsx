"use client"

import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
export default function HomePage() {


    const avatarStyle = {
        width: '13rem',
        borderRadius: '50%',
        padding: '5px',
        border: 'solid 3px'
    };
    return (
        <Layout>

            <div className="p-12 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-500">
                <div className="p-8 flex flex-col bg-white bg-opacity-50 text-slate-950 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 shadow-2xl">
                    <h1 className='flex flex-col justify-center items-center'>Full Stack Web Developer</h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={'/avatar.png'}
                            alt="Raphael's Face"
                            width={250}
                            height={250}
                            style={avatarStyle}
                        />
                    </div>

                    <div className="container d-flex align-items-center flex-column">
                        <p>Hi, I am Raphael! I am currently transitioning from a Quality Control Technician to a Full Stack Web Developer! I studied Full Stack Coding through UCSD Extended Studies Program. I am still fairly new at coding, but I believe with my professional work experience and previous Quality experience; I can make an impact in any company I work for. I love learning and problem-solving very much. I work really well with others and consider my self a really good teammate because of my communication skills and personality </p>
                        <br />
                        <p>Through this bootcamp, I learned the MERN stack! It is difficult but very rewarding. I know this will further my advancement in my career goals and will definitely continue to improve in the future</p>
                        <br />
                        <p>Things you have to know about me: First, I am Christian. I love working in my community and in the church. I am passionate when it comes to Single Player Games. I am a big Harry Potter, Star Wars, DnD, and Anime fan. Feel free to contact me!</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
