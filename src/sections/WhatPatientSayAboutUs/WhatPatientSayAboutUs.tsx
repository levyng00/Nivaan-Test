import React from 'react'
import testimonial1 from '../../../public/desktop/testimonial-1.webp'
import testimonial2 from '../../../public/desktop/testimonial-2.webp'
import testimonial3 from '../../../public/desktop/testimonial-3.webp'
import testimonial4 from '../../../public/desktop/testimonial-4.webp'
import PatientReviewCardCarousel from '@/components/PatientReviewCardCarousel'

const WhatPatientSayAboutUs = () => {
  return (
    <section>
      <h2 className='text-[18px] leading-[22.09px]'>What Our Patients Say About Us!</h2>
      <PatientReviewCardCarousel review={patientReviewData} />
    </section>
  )
}

export default WhatPatientSayAboutUs

const patientReviewData = [
    {id: 1, name: 'Shushma', reviewText: '“I got relief from osteoarthritis pain without surgery with Nivaan’s RFA procedure. The procedure was quick but had a great impact on my life. Thanks Nivaan.”', postedWhen: '2 weeks ago', img: testimonial1},
    {id: 2, name: 'Renu Kaur', reviewText: '“My osteoarthritis pain was finally gone. Opting for Nivaan’s Nerve Block procedure was the best decision of my life. I got rid of that pain that too without surgeries. Thanks Nivaan”', postedWhen: '3 weeks ago', img:testimonial2},
    {id: 3, name: 'Amit Sharma', reviewText: "After years of struggling with osteoarthritis in my knees, I found relief with Nivaan's Nerve Block. A treatment that changed my life, allowing me to walk & move freely again.", postedWhen: '5 weeks ago', img: testimonial3},
    {id: 4, name: 'Deepa Joshi', reviewText: "“When I heard about Nivaan's non-surgical treatment for osteoarthritis, I was skeptical but desperate for a solution. But Nivaan's RFA procedure turned out to be a life-altering choice!", postedWhen: '7 weeks ago', img: testimonial4}
]