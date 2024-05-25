"use client"
import React, {useState} from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
//import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent,DrawerTrigger } from "@/components/ui/drawer"
import Form from "@/components/Form";
import CustomButton from "./CustomButton"

export default function FloatingButton() {
  const [goal, setGoal] = useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <div className='flex md:hidden justify-center relative z-[9999]'>
      <Drawer>
          <DrawerTrigger asChild>
                  {/* <Button className="rounded-t-[17px]" variant="nivaanOrange">Book Consultation</Button> */}
          <button className="fixed bottom-0 bg-[#DB5115] rounded-t-[17px] w-full text-base py-4 text-white font-bold" onClick={() => console.log("clicked...")}>
            Book Consultation
          </button>
          </DrawerTrigger>
          <DrawerContent>
              <Form />
          </DrawerContent>
      </Drawer>
    </div>
  )
}
