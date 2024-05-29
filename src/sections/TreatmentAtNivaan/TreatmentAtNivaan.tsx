import React from 'react'
import TreatmentCarousel from '@/components/TreatmentCarousel'
import { TreatmentData, Treatment } from '@/app/api/data'

const TreatmentAtNivaan = ({ TreatmentCardData, TreatmentHeading }: { TreatmentCardData: TreatmentData[], TreatmentHeading: Treatment }) => {
  return (
    <section className='bg-[#EAF1FB] py-[42px] px-11 md:px-[70px] text-black'>
        <h2 className='mx-auto w-[75%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center'>{TreatmentHeading.heading}</h2>
        <p className='mx-auto w-[90%] md:w-full text-[12px] leading-[14.22px] md:text-[20.55px] md:leading-[32px] mt-6 md:mt-0 mb-8 text-center'>{TreatmentHeading.para}</p>
        <div>
            <TreatmentCarousel TreatmentCardData={TreatmentCardData} />
        </div>
    </section>
  )
}

export default TreatmentAtNivaan
