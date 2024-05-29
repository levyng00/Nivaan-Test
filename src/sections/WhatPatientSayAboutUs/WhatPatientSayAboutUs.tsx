import React from 'react'
import PatientReviewCardCarousel from '@/components/PatientReviewCardCarousel'
import googleIcon2 from '../../../public/desktop/google-logo.webp'
import Image from 'next/image'
import starImg from '../../../public/desktop/Stars.webp'
import { Review } from '@/app/api/data'

const WhatPatientSayAboutUs = ({patientReviewData}: {patientReviewData: Review[]}) => {
  return (
    <section className='pb-20 text-black'>
      <h2 className='text-[18px] leading-[22.09px] md:text-[42px] md:leading-[51.2px] font-extrabold mt-12 mb-8 text-[#2F438F] text-center w-1/2 md:w-full mx-auto'>What Our Patients Say About Us!</h2>
      <div className='flex flex-col md:flex-row justify-between mx-auto bg-[#2F438F] px-8 py-4 w-3/4 md:w-1/2 md:h-[72.63px] rounded-xl mb-12'>
        <p className='text-[13.48px] leading-[16.54px] flex flex-row justify-center items-center text-white'>
          <span className='text-[#00B4E5] font-bold mr-1'>5000+</span> reviews on Google <Image src={googleIcon2} alt='google icon big' />
        </p>
        <div className='flex flex-row justify-center items-center gap-2'>
          <span className='bg-[#00B4E5] px-3 py-5 rounded-full text-[14.12px] leading-[17.33px] font-bold text-white'>4.8+</span>
          <Image src={starImg} alt='star img' width={110} height={154} />
        </div>
      </div>
      <PatientReviewCardCarousel reviews={patientReviewData} />
    </section>
  )
}

export default WhatPatientSayAboutUs
