"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

import { useRouter } from 'next/navigation';

const StartMeetingBtn = () => {
  const { data: session, status } = useSession();

  const client = useStreamVideoClient();
  const [callDetails, setCallDetails] = useState<Call>();

  const router = useRouter();

  async function createMeeting() {
    if (!client || !session) return;

    try {
      const callId = crypto.randomUUID();
      const call = client.call('default', callId);

      if (!call) throw new Error("failed to create call");

      await call.getOrCreate();
      setCallDetails(call);
      router.push(`/meeting/${call.id}`);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Button onClick={createMeeting}>
      Start MEETing
    </Button>
  )
}

export default StartMeetingBtn
