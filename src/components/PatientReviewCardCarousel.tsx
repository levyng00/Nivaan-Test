import React from 'react'
import PatientReviewCard from './PatientReviewCard'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Review } from '@/app/api/data'

const PatientReviewCardCarousel = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className='px-12 md:px-16'>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews?.map(review => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <PatientReviewCard review={review} />
            </CarouselItem>
        ))}
      </CarouselContent>
      <div className={`block md:${reviews.length>3 ? "block" : "hidden"}`}>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
    </div>
  )
}

export default PatientReviewCardCarousel
