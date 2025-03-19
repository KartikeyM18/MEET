import React from 'react'
import StartMeetingBtn from './StartMeetingBtn'
import JoinMeetingBtn from './JoinMeetingBtn'

const CardJoinCreate = () => {
  return (
    <div className='h-[350px] w-[450px] border-white rounded-3xl border flex flex-col justify-center items-center gap-6 bg-zinc-900'>
      <StartMeetingBtn/>
      <JoinMeetingBtn/>
    </div>
  )
}

export default CardJoinCreate
