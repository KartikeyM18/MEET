"use client"
import { CallControls, CallParticipantListing, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

const MeetingRoom = () => {

  return <>
    <SpeakerLayout participantsBarPosition='bottom' />
    <CallControls onLeave={() => {
      redirect('/')
    }} />
  </>
}


export default MeetingRoom
