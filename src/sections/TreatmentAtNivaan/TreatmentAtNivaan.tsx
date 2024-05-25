import React from 'react'
import TreatmentCarousel from '@/components/TreatmentCarousel'
import { TreatmentData } from '@/app/api/data'

const TreatmentAtNivaan = ({ TreatmentCardData }: { TreatmentCardData: TreatmentData[] }) => {
  return (
    <section className='bg-[#EAF1FB] py-[42px] px-11 md:px-[70px]'>
        <h2 className='mx-auto w-[75%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center'>Osteoarthritis Treatments at Nivaan</h2>
        <p className='mx-auto w-[90%] md:w-full text-[12px] leading-[14.22px] md:text-[20.55px] md:leading-[32px] mt-6 mb-8 text-center'>We use the most advanced pain-relief technologies to ensure  maximum pain relief</p>
        {/* <div className='hidden md:flex md:flex-row md:gap-4 justify-center'>
            {
                <TreatmentCarousel TreatmentCardData={TreatmentCardData} />
            }
        </div> */}
        {/* <div className='block md:hidden'>
            <TreatmentCarousel TreatmentCardData={TreatmentCardData} />
        </div> */}
        <div>
            <TreatmentCarousel TreatmentCardData={TreatmentCardData} />
        </div>
    </section>
  )
}

export default TreatmentAtNivaan
