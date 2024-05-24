import Image from "next/image";
import React from "react";
import NivaanWhiteLogo from "../../../public/desktop/nivaan-white-logo.webp";
import NivaanWhiteMobLogo from "../../../public/mobile/nivaan-white-logo-mob.webp";
import { Separator } from "@/components/ui/separator";
import social1 from "../../../public/social1.png";
import social2 from "../../../public/social2.png";
import social3 from "../../../public/social3.png";

const FooterLinks = [
  {
    id: 1,
    title: "Quick links",
    links: [
      {
        subTitle: "Privacy Policy",
        url: "https://www.nivaancare.com/privacy-policy/",
      },
      {
        subTitle: "Terms of Use",
        url: "https://www.nivaancare.com/terms-and-conditions/",
      },
    ],
  },
  {
    id: 2,
    title: "Clinic locations",
    links: [
      {
        subTitle: "East-Delhi",
        url: "https://maps.app.goo.gl/fmNjuaiuNwNQxWbS7",
      },
      { subTitle: "West-Delhi", url: "https://g.co/kgs/zYFLo96" },
      {
        subTitle: "North-Delhi",
        url: "https://maps.app.goo.gl/3Dg5FdmaM87GsS2UA",
      },
      {
        subTitle: "South-Delhi",
        url: "https://maps.app.goo.gl/ShnPReST8DKN9gRs5",
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    links: [
      { subTitle: "Blogs", url: "https://www.nivaancare.com/blog/" },
      {
        subTitle: "How It Works",
        url: "https://www.nivaancare.com/how-it-works/",
      },
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    links: [
      { subTitle: "care@nivaancare.com", url: "mailto:care@nivaancare.com" },
      { subTitle: "+91-73 5871 2483", url: "tel:+917358712483" },
    ],
  },
];

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
                      <a href={x.url} target="_blank" rel="noopener noreferrer">
                        {x.subTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
