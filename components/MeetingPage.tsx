"use client"
import { useGetCallById } from '@/hooks/useGetCallById';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import MeetingSetup from './MeetingSetup';
import MeetingRoom from './MeetingRoom';

const MeetingPage = ({ meetingId }: { meetingId: string }) => {
  const { data: session, status } = useSession();
  const [isSetupComplete, setIsSetUpComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(meetingId);

  if (!session || isCallLoading) return <p>Loading ...</p>

  return (
    <div>
      Meeting page {meetingId}

      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetUpComplete={setIsSetUpComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </div>
  )
}

export default MeetingPage
