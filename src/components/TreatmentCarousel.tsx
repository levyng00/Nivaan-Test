'use client'
import React from 'react'
import TreatmentCard from '@/components/TreatmentCard'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TreatmentData } from "@/app/api/data";

const PatientReviewCardCarousel = ({ TreatmentCardData }: { TreatmentCardData: TreatmentData[] }) => {
  return (
    <div className='px-2 md:px-16'>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {TreatmentCardData?.map(treatment => (
            <CarouselItem key={treatment.id} className="md:basis-1/2 lg:basis-1/3">
                <TreatmentCard treatment={treatment} />
            </CarouselItem>
        ))}
      </CarouselContent>
      <div className={`block md:${TreatmentCardData.length>3 ? "hidden" : "block"}`}>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
    </div>
  )
}

export default PatientReviewCardCarousel

// 'use client'
// import React, {useState} from "react"
// import Treatment1Mob from '../../public/mobile/treatment-1-mob.webp'
// import Treatment2Mob from '../../public/mobile/treatment-2-mob.webp'
// import Treatment3Mob from '../../public/mobile/treatment-3-mob.webp'
// import TreatmentCard from '@/components/TreatmentCard'
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel"

// export default function TreatmentCarousel() {
//   const [api, setApi] = useState<CarouselApi>()
//   const [current, setCurrent] = useState(0)
//   const [count, setCount] = useState(0)

//   React.useEffect(() => {
//     if (!api) {
//       return
//     }

//     setCount(api.scrollSnapList().length)
//     setCurrent(api.selectedScrollSnap() + 1)

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1)
//     })
//   }, [api])

//   return (
//     <div>
//       <Carousel className="w-full max-w-xs">
//         <CarouselContent>
//         {TreatmentCardDataMob.map((treatment) => (
//             <CarouselItem key={treatment.id}>
//               <TreatmentCard treatment={treatment} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//       {/* <div className="mt-[-60px] text-center text-sm text-muted-foreground">
//         Slide {current} of {count}
//       </div> */}
//       <div className="flex justify-center mt-2 space-x-2 h-6">
//         {Array.from({ length: count }).map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               current === index + 1 ? 'bg-blue-500' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// const TreatmentCardDataMob = [
//     {id: 1, name: 'Nerve Blocks', img: Treatment1Mob, process: 'A numbing medication is injected near nerves to block the pain signals from being sent to the brain.', benefits: ['Provides immediate & long-term relief', 'Reduces inflammation', 'Helps with additional medical care']},
//     {id: 2, name: 'Radiofrequency Ablation', img: Treatment2Mob, process: 'Radiofrequency waves are used to eliminate pain sensations.', benefits: ['Minimal recovery time', 'Instant pain relief', 'Reduces reliance on painkillers']},
//     {id: 3, name: 'Pain Injections', img: Treatment3Mob, process: 'Specific steroid/numbing medicine is injected into joints, muscles, or a soft tissue site close to a joint.', benefits: ['Provides instant pain relief', 'Increases mobility', 'Reduces reliance on painkillers']}
// ]