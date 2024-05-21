import Image from 'next/image'
import React from 'react'
import NivaanWhiteLogo from '../../../public/desktop/nivaan-white-logo.webp'
import NivaanWhiteMobLogo from '../../../public/mobile/nivaan-white-logo-mob.webp'
import { Separator } from '@/components/ui/separator'

const FooterLinks = [
    { 
        title: 'Quick links', 
        links: [
            {subTitle: 'Privacy Policy', url: 'https://www.nivaancare.com/privacy-policy/'}, 
            {subTitle: 'Terms of Use', url: 'https://www.nivaancare.com/terms-and-conditions/'}
        ]
    }, 
    {   
        title: 'Clinic locations', 
        links: [
            {subTitle: 'East-Delhi', url: 'https://maps.app.goo.gl/fmNjuaiuNwNQxWbS7'}, 
            {subTitle: 'West-Delhi', url: 'https://g.co/kgs/zYFLo96'}, 
            {subTitle: 'North-Delhi', url: 'https://maps.app.goo.gl/3Dg5FdmaM87GsS2UA'}, 
            {subTitle: 'South-Delhi', url: 'https://maps.app.goo.gl/ShnPReST8DKN9gRs5'}
        ]
    }, 
    {
        title: 'About Us', 
        links: [
            {subTitle: 'Blogs', url: 'https://www.nivaancare.com/blog/'}, 
            {subTitle: 'How It Works', url: 'https://www.nivaancare.com/how-it-works/'}
        ]
    }, 
    {
        title: 'Contact Us', 
        links: [
            {subTitle: 'care@nivaancare.com', url: 'mailto:care@nivaancare.com'}, 
            {subTitle: '+91-73 5871 2483', url: 'tel:+917358712483'}
        ]
    }
]

const Footer = () => {
  return (
    <section className='bg-[#2F438F] text-white pt-9'>
        <div>
            <div className='text-center'>
                <Image className='hidden md:block mx-auto mb-4' src={NivaanWhiteLogo} alt='Nivaan Footer logo' />
                <Image className='block md:hidden mx-auto mb-4' src={NivaanWhiteMobLogo} alt='Nivaan Footer mobile logo' />
                <p className='text-xs'>India’s First Most Advanced Non-Surgical Pain Treatment Chain Of Clinics</p>
            </div>
            <Separator className="my-6" />
            <div className='flex flex-row justify-between'>
                {
                    FooterLinks.map(obj => (
                        <div className='flex flex-col'>
                            <h6 className='text-sm leading-8 font-medium'>{obj.title}</h6>
                            <ul>
                                {
                                    obj.links.map(x => (
                                        <li className='text-xs leading-6 font-light'><a href={`${x.url}`}>{x.subTitle}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <Separator className="mt-6 mb-3" />
            <p className='text-xs font-light pb-10 text-center'>© 2024 Nivaan. All Rights Reserved. Terms & Conditions Apply*</p>
        </div>
    </section>
  )
}

export default Footer
