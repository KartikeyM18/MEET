"use client"
import { useSession } from 'next-auth/react';
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from 'lucide-react';
import LoginButton from './login-btn';


const Photo = () => {
  const { data: session } = useSession();


  if (!session) return;
  return (
    <div className='rounded-full w-10 h-10 bg-zinc-950 text-white flex justify-center items-center text-2xl'>
      {session.user.name[0]}
    </div>
  )
}

const ProfilePhoto = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='rounded-full'>
        <Photo />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer'>

          <LogOut />
          <LoginButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}

export default ProfilePhoto
