import React from 'react'
import Treatment1 from '../../../public/desktop/treatment-1.webp'
import Treatment2 from '../../../public/desktop/treatment-2.webp'
import Treatment3 from '../../../public/desktop/treatment-3.webp'
import Treatment1Mob from '../../../public/mobile/treatment-1-mob.webp'
import Treatment2Mob from '../../../public/mobile/treatment-2-mob.webp'
import Treatment3Mob from '../../../public/mobile/treatment-3-mob.webp'
import TreatmentCard from '@/components/TreatmentCard'

const TreatmentAtNivaan = () => {
  return (
    <section className='bg-[#EAF1FB] py-[42px] px-6 md:px-[70px]'>
        <h2 className='font-extrabold text-[42px] leading-[51.2px] text-[#2F438F] text-center'>Osteoarthritis Treatments at Nivaan</h2>
        <p className='text-[20.55px] leading-[32px] mt-6 mb-8'>We use the most advanced pain-relief technologies to ensure  maximum pain relief</p>
        <div className='flex flex-row gap-4'>
            {
                TreatmentCardData.map(treatment => <TreatmentCard treatment={treatment} />)
            }
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