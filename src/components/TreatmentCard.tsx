import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Treatment {
  id: number;
  name: string;
  img: StaticImageData;
  process: string;
  benefits: string[];
}

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className='p-6 bg-white rounded-lg w-[33%]'>
        <div className='flex justify-between'>
            <h3 className='font-bold text-[22px] leading-[26px] text-[#2F438F]'>{treatment.name}</h3>
            <Image src={treatment.img} alt="treatement image" />
        </div>
        <div className='text-[15px] leading-[22px] mt-4'>
            <h4 className='text-[#2F438F] font-semibold'>Process:</h4>
            <p>{treatment.process}</p>
        </div>
        <div className='text-[15px] leading-[22px] mt-4'>
            <h4 className='text-[#2F438F] font-semibold'>Benefits:</h4>
            <ul>
                {
                    treatment.benefits.map(benefit => <li><span className='font-extrabold ml-2'>•</span> {benefit}</li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default TreatmentCard
