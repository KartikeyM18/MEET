"use client"
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

const Join = () => {
    const [meetingId, setMeetingId] = useState("");
    return (
        <div>
            <input type="text" placeholder='Add Meeting ROOM id' onChange={(e) => setMeetingId(e.target.value)} />
            <Button onClick={() => {
                if (meetingId != "") redirect(`/meeting/${meetingId}`)
            }}>Join</Button>
        </div >
    )
}

export default Join
