import React from 'react'
import googleIcon from '../../public/desktop/google-icon-small.webp'
import Image, { StaticImageData } from 'next/image'
import star from '../../public/desktop/star.webp'
import { Review } from '@/app/api/data'

const PatientReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className='flex flex-col bg-[#EAF1FB] rounded-xl h-48 md:h-56 relative'>
        <div className='hidden md:flex md:justify-end'>
            <Image className='mt-2 mr-2' src={googleIcon} alt='google icon small' height={19.58} width={19.58} />
        </div>
        <div className='flex justify-end md:hidden'>
            <Image className='mt-2 mr-2' src={googleIcon} alt='google icon small' height={16.31} width={16.31} />
        </div>
        <div className='flex flex-row'>
            <div className='absolute bottom-0'>
                <Image src={review.img} alt='user image' width={110.4} height={154.8} />
            </div>
            <div className='flex flex-col w-[60%] absolute left-24 md:left-28'>
                <p className='text-[9.7px] leading-[12.92px] md:text-[11.63px] md:leading-[15.5px] bg-white md:p-3 p-2 rounded-2xl'>{review.reviewText}</p>
                <div className='flex flex-row justify-between mt-2 px-2'>
                    <div className='flex flex-col'>
                        <h4 className='font-bold text-[11.31px] leading-[13.4px] md:text-[13.57px] md:leading-[16.08px]'>{review.name}</h4>
                        <Image src={star} alt='star icon small' />
                    </div>
                    <div className='text-[5.96px] leading-[7.07px] md:text-[7.16px] md:leading-[8.48px]'>{review.postedWhen}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientReviewCard
