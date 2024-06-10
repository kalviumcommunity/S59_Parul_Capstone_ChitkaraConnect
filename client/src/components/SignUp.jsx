import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import Logo from '../assets/logo.jpg'
import User from '../assets/user.png'
import Email from '../assets/mail.png'
import Password from '../assets/padlock.png'
import Telephone from '../assets/telephone.png'
import Close from '../assets/close.png'
import UniId from '../assets/face-recognition.png'

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [id, setId] = useState("")
    const [occupation, setOccupation] = useState("")

    const handleOccupationChange = (e) => {
        setOccupation(e.target.value)
        if (e.target.value == 'guest') {
            setId(1111111111)
        } else {
            setId("")
        }
    }

    const onSubmit = (data) => {
        postUser(data)
    }

    const postUser = (data) => {
        data.occupation = occupation
        data.uni_id = id
        axios.post('http://localhost:8080/user/register', data)
            .then(response => {
                console.log(response.data)
                toast.success("Registered Successfully!")
            })
            .catch(error => {
                toast.error("SignUp failed! Try again later")
                console.log("Error posting user:", error)
            })
    }

    return (
        <div className='w-full h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className="w-[85vw] h-[43vw] m-16 rounded-xl shadow-xl flex justify-between items-center p-5" style={{ backgroundColor: 'white' }}>
                <div className='bg-red-500 w-[50vw] h-[100%] rounded-l-xl rounded-r-[8vw] p-6 text-white flex flex-col'>
                    <p className='text-3xl font-semibold text-center mt-10'>Hello</p>
                    <p className='font-semibold text-[2.7vw] text-center mb-[5vw]'>Welcome to</p>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Logo} alt="ChitkLogo" className='w-[6vw] h-[6vw] rounded-xl mt-4' />
                        <h1 className='font-bold text-6xl my-4'>Chitkara Connect</h1>
                    </div>
                </div>
                <div className='flex flex-col p-10 w-[50vw] h-[100%] mx-2 py-4'>
                    <Link to="/">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-red-500 font-bold text-4xl my-2'>Sign Up!</h1>
                            <img src={Close} alt="close" className='w-[3.5vw] h-[3.5vw] hover:shadow hover:shadow-gray-500 rounded-md' />
                        </div>
                    </Link>
                    <p className='py-1 text-[1.1vw]'>Hey! Enter you details to be the part of the Chitkara Connect.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-[32vw] mt-6 pr-2 overflow-y-scroll'>
                        <div className='flex items-center gap-1 px-4 border-2 rounded-xl'>
                            <img src={User} alt="username" className='w-[1.7vw] h-[1.7vw]' />
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium'
                                {...register('name', {
                                    required: "Please enter the name",
                                    minLength: { value: 3, message: "Name should be of minimum 3 characters." },
                                    maxLength: { value: 30, message: "Name should be not more than 30 characters long" }
                                })}
                            />

                        </div>
                        {errors.name && <p className='text-red-500 text-[1vw]'>{errors.name.message}</p>}
                        <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                            <img src={Email} alt="email" className='w-[1.7vw] h-[1.7vw]' />
                            <input type="email"
                                placeholder='Enter your email'
                                className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium'
                                {...register("email", {
                                    required: "Please enter the email",
                                    minLength: { value: 3, message: "Email should be of minimum 3 characters." },
                                    maxLength: { value: 30, message: "Email should be not more than 30 characters long" }
                                })}
                            />                         </div>
                        {errors.email && <p className='text-red-500 text-[1vw]'>{errors.email.message}</p>}
                        <label className="block text-gray-700 text-base mt-3 font-semibold ">Choose your occupation:</label>
                        <div className='my-4 mx-4 flex flex justify-start text-base'>
                            <div className='mr-2'>
                                <input type="radio" id="student" name="occupation" value="student" onChange={handleOccupationChange} className='text-base focusSelect mx-2' />
                                <label htmlFor="student">Student</label>
                            </div>
                            <div className='mr-2'>
                                <input type="radio" id="faculty" name="occupation" value="faculty" onChange={handleOccupationChange} className='text-base focusSelect mx-2' />
                                <label htmlFor="faculty">Faculty</label>
                            </div>
                            <div className='mr-2'>
                                <input type="radio" id="guest" name="occupation" value="guest" onChange={handleOccupationChange} className='text-base focusSelect mx-2' />
                                <label htmlFor="guest">Guest</label>
                            </div>
                        </div>

                        {(occupation === 'student' || occupation === 'faculty') && (
                            <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                                <img src={UniId} alt='id' className='w-[1.7vw] h-[1.7vw]' />
                                <input
                                    placeholder={`Enter your ${occupation} ID`}
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium'
                                />
                            </div>
                        )}

                        <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                            <img src={Telephone} alt="contact" className='w-[1.7vw] h-[1.7vw]' />
                            <input type="tel" pattern="[0-9]{10}" placeholder='Enter your contact no' {...register('contact', { required: true })} className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium' />
                        </div>
                        {errors.contact && <p className='text-red-500 text-[1vw]'>Contact number is required.</p>}
                        <div className='flex items-center gap-1 px-4 mt-3 border-2 rounded-xl'>
                            <img src={Password} alt="password" className='w-[1.7vw] h-[1.7vw]' />
                            <input
                                type="password"
                                placeholder='Your password'
                                className='focusSelect text-base w-[30vw] my-3 rounded px-2 font-medium'
                                {...register('password', {
                                    required: "Please enter the password",
                                    minLength: {
                                        value: 10,
                                        message: "The password should be at least 10 characters long",
                                    }
                                })}
                            />

                        </div>
                        {errors.password && <p className='text-red-500 text-[1vw]'>{errors.password.message}</p>}
                        <div className='flex flex-col justify-center my-5'>
                            <button type="submit" className='text-white bg-red-500 px-6 py-[.6vw] rounded-md font-bold text-base transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-white'>Sign Up</button>
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