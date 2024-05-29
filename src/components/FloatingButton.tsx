"use client";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";

export default function FloatingButton() {
  const [goal, setGoal] = useState(350);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className="flex md:hidden justify-center relative z-[9999]">
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <button
            className="fixed bottom-0 bg-[#DB5115] rounded-t-[17px] w-full text-base py-4 text-white font-bold"
            onClick={() => sendGTMEvent({ event: 'Form Open', value: {"Form Name": "Floating-Button-Form", "CTA Button text": "Book Consultation", "Landing Page URL": landingPageUrl} })}
            style={{ display: isDrawerOpen ? "none" : "block" }}
          >
            Book Consultation
          </button>
        </DrawerTrigger>
        <DrawerContent className="rounded-3xl z">
          <DrawerClose className="flex justify-end items-center px-4 mb-2">
            <X onClick={() => sendGTMEvent({ event: 'Form Close', value: {"Form Name": "Floating-Button-Form", "CTA Button text": null, "Landing Page URL": landingPageUrl} })} />
          </DrawerClose>
          <div className="z-40">
            <Form formLocation="Floating-Button-Form" formName="Floating-Button-Form" />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
