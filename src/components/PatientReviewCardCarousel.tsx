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
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {reviews?.map(review => (
            <CarouselItem key={review.id}>
                <PatientReviewCard review={review} />
             </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PatientReviewCardCarousel
