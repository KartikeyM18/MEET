"use client"
import { useGetCallById } from '@/hooks/useGetCallById';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import MeetingSetup from './MeetingSetup';
import MeetingRoom from './MeetingRoom';
import Loader from './Loader';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"




const MeetingPage = ({ meetingId }: { meetingId: string }) => {
  const { data: session } = useSession();
  const [isSetupComplete, setIsSetUpComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(meetingId);
  const pathname = window.location.href;

  if (!session || isCallLoading) return <Loader />

  async function handleCopy(txt: string) {
    try {
      await navigator.clipboard.writeText(txt);

    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }

  function AlertDialogDemo({copy}: {copy: string}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className='text-white bg-black hover:text-white hover:bg-zinc-900' 
          onClick={()=>{
            if(copy === "Meeting ID") handleCopy(meetingId)
            if(copy === "Meeting Link"){
              
              handleCopy(pathname);
            } 
            }}>Copy {copy}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='text-white bg-zinc-800'>
          <AlertDialogHeader>
            <AlertDialogTitle>Copied {copy}!</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  return (
    <div className='h-screen w-full '>
      <div className='absolute z-10 flex justify-center gap-3 w-full pt-3'>

        <AlertDialogDemo copy="Meeting ID"/>
        <AlertDialogDemo copy="Meeting Link"/>
      </div>

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
