import React from 'react'
import Insta from '../assets/instagram.png'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Email from '../assets/email.png'

export default function Footer() {
    return (
        <div className='w-[100vw] bg-white p-8'>
            <div className='flex justify-center w-full p-1'>
                <a href="https://www.instagram.com/paarullchauhan/">
                <img src={Insta} alt="instagram" className='w-[4vw] h-[8.5vh] mx-6 cursor-pointer opacity-[.75] hover:opacity-100' />
                </a>
                <a href="https://www.linkedin.com/in/parul-chauhan-474b46261/">
                <img src={LinkedIn} alt="linkedin" className='w-[4vw] h-[8vhh] mx-6 cursor-pointer opacity-[.75] hover:opacity-100' />   
                </a>
                <img src={Email} alt="email" className='w-[4vw] h-[8.5vh] mx-6 cursor-pointer opacity-[.75] hover:opacity-100' />     
                <a href="https://github.com/parulchauhann">
                <img src={Github} alt="github" className='w-[4vw] h-[8vhh] mx-6 cursor-pointer opacity-[.75] hover:opacity-100' />            
                </a>
            </div>
            <p className='text-center text-xl text-gray-500 mt-4'>
                Join us today and unlock a world of opportunities.
            </p>
        </div>
    )
}
