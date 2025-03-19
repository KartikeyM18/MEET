"use client"
import React from 'react'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'

const JoinMeetingBtn = () => {


  return (
    <Button onClick={() => redirect('/join')} className='text-4xl p-10 rounded-3xl w-[270px] flex text-black bg-white hover:scale-110 hover:bg-gray-300 transition-all'>
      Join <span className='font-extrabold'>MEET</span>
    </Button>
  )
}

export default JoinMeetingBtn
