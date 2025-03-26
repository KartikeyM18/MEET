"use client"
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

const Join = () => {
    const [meetingId, setMeetingId] = useState("");
    return (
        <div className="bg-zinc-800 h-screen">
            <NavBar />
            <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">

                <div className='h-[270px] w-[90%] sm:w-[450px] border-white rounded-3xl border flex flex-col justify-center items-center gap-6 bg-zinc-900'>
                    <Input className='bg-zinc-800 w-[90%] text-white' placeholder='Meeting Id' onChange={(e) => setMeetingId(e.target.value)} />
                    <Button onClick={() => {
                        if (meetingId != "") redirect(`/meeting/${meetingId}`)
                    }} className='text-3xl p-10 rounded-3xl w-[240px] flex justify-center bg-black hover:scale-110 hover:bg-gray-950 transition-all'>
                        Join <span className='font-extrabold'>MEET</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Join
