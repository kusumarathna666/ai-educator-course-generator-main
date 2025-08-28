'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'

// Dynamically import UserButton with SSR disabled
const UserButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.UserButton), {
  ssr: false,
})

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Image src={'/globe.svg'} width={30} height={50} alt='image' />
      <UserButton />
    </div>
  )
}

export default Header
