import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import User from '../assets/user.png'
import Email from '../assets/mail.png'
import Password from '../assets/padlock.png'
import Telephone from '../assets/telephone.png'
import Close from '../assets/close.png'

export default function SignUp() {
    return (
        <div className='w-full h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className="w-[85vw] h-[43vw] m-16 rounded-xl shadow-xl flex justify-between items-center p-5">
                <div className='bg-red-500 w-[50vw] h-[100%] rounded-l-xl rounded-r-[8vw] p-6 text-white flex flex-col'>
                    <p className='text-3xl font-semibold text-center mt-10'>Hello</p>
                    <p className='font-semibold text-[2.7vw] text-center mb-[5vw]'>Welcome to</p>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Logo} alt="ChitkLogo" className='w-[6vw] h-[6vw] rounded-xl mt-4' />
                        <h1 className='font-bold text-6xl my-4'>Chitkara Connect</h1>
                    </div>
                </div>
                <div className='flex flex-col p-10 w-[50vw] h-[100%] mx-2 py-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-red-500 font-bold text-4xl my-2'>Sign Up!</h1>
                        <img src={Close} alt="close" className='w-[3.5vw] h-[3.5vw] hover:shadow hover:shadow-gray-500 rounded-md' />
                    </div>
                    <p className='py-1 text-[1.1vw]'>Hey! Enter you details to be the part of the Chitkara Connect.</p>
                    <form action="" className='w-[32vw] mt-6'>
                        <div className='flex items-center gap-1 px-4 border-2 rounded-xl'>
                            <img src={User} alt="username" className='w-[1.7vw] h-[1.7vw]' />
                            <input type="text" placeholder='Enter your name' className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium' />
                        </div>
                        <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                            <img src={Email} alt="email" className='w-[1.7vw] h-[1.7vw]' />
                            <input type="text" placeholder='Enter your email' className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium' />
                        </div>
                        <label className="block text-gray-700 text-base mt-3 font-semibold ">Choose your occupation:</label>
                        <div className='my-4 mx-4 flex flex justify-start text-base'>
                            <div className='mr-2'>
                                <input type="radio" id="student" name="occupation" value="student" className='text-base focusSelect mx-2' />
                                <label htmlFor="student">Student</label>
                            </div>
                            <div className='mr-2'>
                                <input type="radio" id="faculty" name="occupation" value="faculty" className='text-base focusSelect mx-2' />
                                <label htmlFor="faculty">Faculty</label>
                            </div>
                            <div className='mr-2'>
                                <input type="radio" id="guest" name="occupation" value="guest" className='text-base focusSelect mx-2' />
                                <label htmlFor="guest">Guest</label>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                            <img src={Telephone} alt="contact" className='w-[1.7vw] h-[1.7vw]' />
                            <input type="tel" placeholder='Enter your contact no' className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium' />
                        </div>
                        <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                            <img src={Password} alt="password" className='w-[1.7vw] h-[1.7vw]' />
                            <input type="password" placeholder='Your password' className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium' />
                        </div>
                        <div className='flex flex-col justify-center my-5'>
                            <button className='text-white bg-red-500 px-6 py-[.6vw] rounded-md font-bold text-base transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-white'>Sign Up</button>
                            <Link to="/Login">
                                <p className='text-[1.2vw] text-center my-4'>Already have an account? <span className='text-red-500 font-bold'>Login here!</span></p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}