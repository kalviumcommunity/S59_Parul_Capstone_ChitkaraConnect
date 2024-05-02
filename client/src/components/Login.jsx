import React from 'react'
import { Link } from 'react-router-dom'
import Email from '../assets/emailIcon.png'
import Eye from '../assets/eye.png'
import HiddenEye from '../assets/hidden.png'
import UniStudent from '../assets/UniStudent.png'
import SignUp from './SignUp'

export default function Login() {
    return (
        <div>
            <div className='w-[100vw] flex'>
                <div className='bg-black w-[45%] py-14 px-16'>
                    <h1 className='text-[3vw] font-bold text-red-500'>Get Started</h1>
                    <p className='text-white text-[1.3vw]'>Become part of our community. Join us and organize events!</p>
                    <form action="" className='py-4'>
                        <div className='my-4 flex'>
                            <input type="text" placeholder='Enter your mail' className='px-4 py-[.7vw] text-[1.3vw] w-[28vw] rounded-l-md' />
                            <div className='bg-red-500 w-[4.5vw] h-[4vw] flex items-center justify-center rounded-r-md'>
                                <img src={Email} alt="email" className='w-[2.5vw] h-[2.5vw]' />
                            </div>
                        </div>
                        <div className='my-4 flex'>
                            <input type="text" placeholder='Enter password' className='px-4 py-[.7vw] text-[1.3vw] w-[28vw] rounded-l-md' />
                            <div className='bg-red-500 w-[4.5vw] h-[4vw] flex items-center justify-center rounded-r-md'>
                                <img src={Eye} alt="password" className='w-[2.5vw] h-[2.5vw] cursor-pointer' />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <button className='text-white bg-red-500 px-6 py-2 rounded-md font-semibold text-xl transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-white'>Login</button>
                            <Link to="/SignUp">
                                <button className='bg-black text-red-500 border-2 border-red-500 mx-6 px-4 py-2 rounded-md font-semibold text-xl transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-white'>Create a new account</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='bg-red-500 w-[55%] flex items-center justify-around'>
                    <h1 className='w-[80%] text-[5.5vw] font-bold mb-22 pl-8'>JOIN US HERE!</h1>
                    <div className='h-[29vw] w-[55vw]'>
                        <img src={UniStudent} alt="uniStudent" />
                    </div>
                </div>
            </div>
        </div>
    )
}
