"use client"
import React from 'react'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react';
import {  useStreamVideoClient } from '@stream-io/video-react-sdk';

import { useRouter } from 'next/navigation';

const StartMeetingBtn = () => {
  const { data: session } = useSession();

  const client = useStreamVideoClient();

  const router = useRouter();

  async function createMeeting() {
    if (!client || !session) return;

    try {
      const callId = crypto.randomUUID();
      const call = client.call('default', callId);

      if (!call) throw new Error("failed to create call");

      await call.getOrCreate();
      router.push(`/meeting/${call.id}`);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Button onClick={createMeeting} className='text-4xl p-10 rounded-3xl w-[270px] flex bg-black hover:scale-110 hover:bg-gray-950 transition-all'>
      Start <span className='font-extrabold'>MEET</span>
    </Button>
  )
}

export default StartMeetingBtn
