import Image from "next/image";
import React from "react";
import NivaanWhiteLogo from "../../../public/desktop/nivaan-white-logo.webp";
import NivaanWhiteMobLogo from "../../../public/mobile/nivaan-white-logo-mob.webp";
import { Separator } from "@/components/ui/separator";
import social1 from "../../../public/social1@2x.png";
import social2 from "../../../public/social2@2x.png";
import social3 from "../../../public/social3@2x.png";
import { FooterLinks } from "@/app/api/data";

const Footer = () => {
  return (
    <section className="bg-[#2F438F] text-white pt-9">
      <div>
        <div className="text-center">
          <Image
            className="hidden md:block mx-auto mb-4"
            src={NivaanWhiteLogo}
            alt="Nivaan Footer logo"
          />
          <Image
            className="block md:hidden mx-auto mb-4"
            src={NivaanWhiteMobLogo}
            alt="Nivaan Footer mobile logo"
          />
          <p className="text-xs w-3/4 mx-auto">
            India’s First Most Advanced Non-Surgical Pain Treatment Chain Of
            Clinics
          </p>
        </div>
        <div className="mx-12 md:mx-14">
          <Separator className="my-6" />
          {/* <div className='flex flex-row justify-between'> */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:w-4/5 md:mx-auto">
            {FooterLinks.map((obj, i) => (
              <div
                key={i}
                className="flex flex-col items-start md:px-18 mb-4 px-5 gap-2"
              >
                <h6 className="text-sm leading-8 font-medium">{obj.title}</h6>
                <ul>
                  {obj.links.map((x) => (
                    <li key={obj.id} className="text-xs leading-6 font-light">
                      • <a 
                        href={x.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={
                          x.subTitle === "care@nivaancare.com" || x.subTitle === "Privacy Policy" || x.subTitle === "Terms of Use"
                            ? "underline"
                            : x.subTitle.startsWith("+91")
                            ? "font-bold"
                            : ""
                        }
                      >
                        {x.subTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-row w-20 gap-3">
              <a href="https://www.facebook.com/nivaancare" target="_blank">
                <Image src={social3} alt="facebook icon" />
              </a>
              <a href="https://www.youtube.com/@nivaancare" target="_blank">
                <Image src={social1} alt="youtube icon" />
              </a>
              <a href="https://www.instagram.com/nivaancare/" target="_blank">
                <Image src={social2} alt="instagram icon" />
              </a>
            </div>
          </div>
          <Separator className="mt-6 mb-3" />
          <p className="text-xs font-light pb-10 text-center">
            © 2024 Nivaan. All Rights Reserved. Terms & Conditions Apply*
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
