import Image from 'next/image'
import React from 'react'
import NivaanWhiteLogo from '../../../public/desktop/nivaan-white-logo.webp'
import NivaanWhiteMobLogo from '../../../public/mobile/nivaan-white-logo-mob.webp'

const Footer = () => {
  return (
    <div className='bg-[#2F438F] text-white'>
      <Image className='hidden md:block' src={NivaanWhiteLogo} alt='Nivaan Footer logo' />
      <Image className='block md:hidden' src={NivaanWhiteMobLogo} alt='Nivaan Footer mobile logo' />
      <p className='text-xs'>India’s First Most Advanced Non-Surgical Pain Treatment Chain Of Clinics</p>
    </div>
  )
}

export default Footer
