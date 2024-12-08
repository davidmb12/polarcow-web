import React from 'react'
import { MainNav } from '@/components/navigation/main-nav';
import { redirect } from 'next/navigation';

const Navbar = async () => {
  

  return (
    <div className='absolute'>
      <div className='flex h-16 justify-center px-4'>
        <MainNav className='mx-6'/>
        <div className='ml-auto flex items-center space-x-4'>
        </div>
      </div>
    </div>
  )
}

export default Navbar;