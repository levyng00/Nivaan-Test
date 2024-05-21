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
    <Card className='px-0 md:px-14 mb-6 md:text-center flex flex-row md:flex-col'>
        <CardHeader>
            <Image className='mx-auto' src={doc.img} alt='doctor img' />
        </CardHeader>
        <CardContent className='w-[130%] md:w-full mt-4 text-[11px] leading-[18.94px] md:text-base'>
            <h3 className='font-semibold text-sm md:text-xl'>{doc.name}</h3>
            <p>{doc.field}</p>
            <p>{doc.degree}</p>
            <p className='bg-[#EAF1FB] text-[#2F438F] text-xs md:text-xl mt-2 block md:hidden'>{`${doc.experience} years of experience`}</p>
        </CardContent>
        <p className='bg-[#EAF1FB] text-[#2F438F] text-xl mt-2 hidden md:block'>{`${doc.experience} years of experience`}</p>
    </Card>
  )
}

export default DoctorCard
