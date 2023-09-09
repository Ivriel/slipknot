import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
<div className='flex grow w-full bg-black text-white'>
    <div className='w-full h-[146px] pt-[10px] pb-[50px] '>
        <ul className="flex justify-center items-center mb-4">
            <li className='text-2xl px-4 hover:text-orange-500 cursor-pointer'><FacebookRoundedIcon /></li>
            <li className='text-2xl px-4 hover:text-orange-500 cursor-pointer'><TwitterIcon /></li>
            <li className='text-2xl px-4 hover:text-orange-500 cursor-pointer'><InstagramIcon /></li>
            <li className='text-2xl px-4 hover:text-orange-500 cursor-pointer'><YouTubeIcon /></li>
            <li className='text-2xl px-4 hover:text-orange-500 cursor-pointer'><AppleIcon /></li>
            <li className='text-2xl px-4 hover:text-orange-500 cursor-pointer'><FontAwesomeIcon icon="fa-brands fa-spotify" /></li>
        </ul>
        <div className='bg-black flex justify-center items-center'>
            <div>
               <p className='text-[11px] '>© 2023 SLIPKNOT OFFICIAL STORE. ALL RIGHTS RESERVED.</p>
            </div>
            <div>
                <ul className='flex justify-center items-center'>
                    <li className='text-[11px] px-4'>HELP</li>
                    <li>|</li>
                    <li className='text-[11px] px-4'>TERMS</li>
                    <li>|</li>
                    <li className='text-[11px] px-4'>PRIVACY</li>
                    <li>|</li>
                    <li className='text-[11px] px-4'>DO NOT SELL MY PERSONAL INFORMATION</li>
                    <li>|</li>
                    <li className='text-[11px] px-4'>COOKIE CHOICE</li>                   
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
