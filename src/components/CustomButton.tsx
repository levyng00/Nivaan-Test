import React from 'react'
import { cn } from '@/lib/utils'

interface CustomButtonProps {
  title: string, 
  onBtnClick: () => void,
  className?: string
}

const CustomButton:React.FC<CustomButtonProps> = ({ title, onBtnClick, className }) => {
  const baseStyles = 'font-bold rounded-xl text-xs md:text-3xl py-2 px-2.5 md:py-3 md:px-6';
  const combinedStyles = cn(baseStyles, className);

  return (
    <button className={combinedStyles}>{title}</button>
  )
}

export default CustomButton
