"use client"
import { CallControls, SpeakerLayout } from '@stream-io/video-react-sdk';
import { redirect } from 'next/navigation';
import React from 'react'

const MeetingRoom = () => {

  return <>
    <SpeakerLayout participantsBarPosition='bottom' />
    <CallControls onLeave={() => {
      redirect('/')
    }} />
  </>
}


export default MeetingRoom
