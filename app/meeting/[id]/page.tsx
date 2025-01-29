
import MeetingPage from '@/components/MeetingPage';

import React from 'react'

const Meeting = async ({params}: {params: Promise<{id: string}>}) => {
    const meetingId:string = (await params).id;

    return (
    <div>
      <MeetingPage meetingId={meetingId}/>
    </div>
  )
}

export default Meeting
