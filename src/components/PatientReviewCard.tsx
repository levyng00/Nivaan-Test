import React from 'react'
import googleIcon from '../../public/desktop/google-icon-small.webp'
import Image, { StaticImageData } from 'next/image'
import star from '../../public/desktop/star.webp'

export interface patientReview {
    id: number,
    name: string,
    reviewText: string,
    postedWhen: string,
    img: StaticImageData
}

interface patientReviewProps {
    review: patientReview;
}

const PatientReviewCard: React.FC<patientReviewProps> = ({ review }) => {
  return (
    <div className='flex flex-col bg-[#EAF1FB] rounded-xls'>
        <div className='flex justify-end'>
            <Image src={googleIcon} alt='google icon small' />
        </div>
        <div className='flex flex-row'>
            <div>
                <Image src={review.img} alt='user image' />
            </div>
            <div className='flex flex-col'>
                <p className='text-[9.7px] leading-[12.92px] md:text-[11.63px] md:leading-[15.5px] bg-white'>{review.reviewText}</p>
                <div className='flex flex-row justify-between'>
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
