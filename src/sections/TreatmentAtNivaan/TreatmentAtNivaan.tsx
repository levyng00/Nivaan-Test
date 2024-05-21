import React from 'react'
import Treatment1 from '../../../public/desktop/treatment-1.webp'
import Treatment2 from '../../../public/desktop/treatment-2.webp'
import Treatment3 from '../../../public/desktop/treatment-3.webp'
import TreatmentCard from '@/components/TreatmentCard'
import TreatmentCarousel from '@/components/TreatmentCarousel'

const TreatmentAtNivaan = () => {
  return (
    <section className='bg-[#EAF1FB] py-[42px] px-11 md:px-[70px]'>
        <h2 className='mx-auto w-[75%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center'>Osteoarthritis Treatments at Nivaan</h2>
        <p className='mx-auto w-[90%] md:w-full text-[12px] leading-[14.22px] md:text-[20.55px] md:leading-[32px] mt-6 mb-8 text-center'>We use the most advanced pain-relief technologies to ensure  maximum pain relief</p>
        <div className='hidden md:flex md:flex-row md:gap-4 justify-center'>
            {
                TreatmentCardData.map(treatment => <TreatmentCard key={treatment.id} treatment={treatment} />)
            }
        </div>
        <div className='block md:hidden'>
            <TreatmentCarousel />
        </div>
    </section>
  )
}

export default TreatmentAtNivaan
 
const TreatmentCardData = [
    {id: 1, name: 'Nerve Blocks', img: Treatment1, process: 'A numbing medication is injected near nerves to block the pain signals from being sent to the brain.', benefits: ['Provides immediate & long-term relief', 'Reduces inflammation', 'Helps with additional medical care']},
    {id: 2, name: 'Radiofrequency Ablation', img: Treatment2, process: 'Radiofrequency waves are used to eliminate pain sensations.', benefits: ['Minimal recovery time', 'Instant pain relief', 'Reduces reliance on painkillers']},
    {id: 3, name: 'Pain Injections', img: Treatment3, process: 'Specific steroid/numbing medicine is injected into joints, muscles, or a soft tissue site close to a joint.', benefits: ['Provides instant pain relief', 'Increases mobility', 'Reduces reliance on painkillers']}
]
