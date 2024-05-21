import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import Image, {StaticImageData} from 'next/image'

export interface Doctor {
    id: number;
    img: StaticImageData;
    name: string;
    field: string;
    degree: string;
    experience: string;
  }
  
  interface DoctorCardProps {
    doc: Doctor;
  }

const DoctorCard: React.FC<DoctorCardProps> = ({ doc }) => {
  return (
    <Card className='px-14 md:text-center'>
        <CardHeader>
            <Image className='mx-auto' src={doc.img} alt='doctor img' />
            <CardTitle className='font-semibold text-sm md:text-xl'>{doc.name}</CardTitle>
        </CardHeader>
        <CardContent className='text-[11px] leading-[18.94px] md:text-base'>
            <p>{doc.field}</p>
            <p>{doc.degree}</p>
        </CardContent>
        <CardFooter>
            <p className='bg-[#EAF1FB] text-[#2F438F] text-xs md:text-xl'>{`${doc.experience} years of experience`}</p>
        </CardFooter>
    </Card>
  )
}

export default DoctorCard
