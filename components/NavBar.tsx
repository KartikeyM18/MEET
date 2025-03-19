import React from 'react'
import ProfilePhoto from './ProfilePhoto'

const NavBar = () => {
    return (
        <div className='w-full h-16 bg-cyan-400 flex items-center justify-center'>
            <div className='px-5 flex items-center w-full justify-between'>
                <div className='text-4xl font-extrabold text-white'>MEET</div>
                <ProfilePhoto />
            </div>
        </div>
    )
}

export default NavBar
