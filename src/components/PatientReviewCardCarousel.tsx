import React from 'react'
import PatientReviewCard, { patientReview } from './PatientReviewCard'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface patientReviewProps {
    reviews: patientReview[];
}

const PatientReviewCardCarousel: React.FC<patientReviewProps> = ({ reviews }) => {
  return (
    <div className='px-16'>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews?.map(review => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <PatientReviewCard review={review} />
                </div>
             </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default PatientReviewCardCarousel
