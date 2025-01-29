"use client"
import React from 'react'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'

const JoinMeetingBtn = () => {


  return (
    <Button onClick={() => redirect('/join')}>
      Join MEETing
    </Button>
  )
}

export default JoinMeetingBtn
