"use client"
import { useCall, VideoPreview } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({ setIsSetUpComplete }: { setIsSetUpComplete: (val: boolean) => void }) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

    const call = useCall();
    if (!call) throw new Error("call is not there");
    useEffect(() => {
        if (isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamToggledOn, call?.camera, call?.microphone])
    return (
        <div>
            Meetingsetup

            <VideoPreview />
            <div>
                <label >
                    <input type="checkbox" checked={isMicCamToggledOn} onChange={(e) => setIsMicCamToggledOn(e.target.checked)} />
                    Join with Mic and Camera Off
                </label>
            </div>

            <Button className='bg-green-500' onClick={() => {
                call?.join();
                setIsSetUpComplete(true);
            }}>Join MEETing</Button>
        </div>
    )
}

export default MeetingSetup
