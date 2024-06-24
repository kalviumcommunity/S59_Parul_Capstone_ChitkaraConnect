import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'

function AddClub() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [clubData, setClubData] = useState({
    clubName: '',
    clubEmail: '',
    clubContact: '',
    clubSlogan: '',
    clubHeads: '',
    clubMentors: '',
    clubMembers: '',
    clubDesc: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setClubData({
      ...clubData,
      [name]: value
    })
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/addClub', data)
      console.log(response.data)
      toast.success("Club added successfully!")
    } catch (error) {
      console.error('Error posting club data:', error)
      toast.error("Failed to add club. Please try again.")
    }
  }

  return (
    <div>
      <div className='playground w-full flex flex-col justify-center items-center'>
        <h2 className='title p-4'>Add your Club below:</h2>
        <div className='form-container'>
          <form className='form flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name='clubName'
              placeholder="Enter Club Name"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubName', { required: "Club Name is required" })}
              value={clubData.clubName}
              onChange={handleChange}
            />
            {errors.clubName && <span className='text-red-500'>{errors.clubName.message}</span>}

            <input
              type="text"
              name='clubEmail'
              placeholder="Enter Club Email"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubEmail', {
                required: "Club Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Ensure the email format!"
                }
              })}
              value={clubData.clubEmail}
              onChange={handleChange}
            />
            {errors.clubEmail && <span className='text-red-500'>{errors.clubEmail.message}</span>}

            <input
              type="text"
              name='clubContact'
              placeholder="Enter Club Contact"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubContact', {
                required: "Club Contact is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Club Contact requires a 10-digit number"
                }
              })}
              value={clubData.clubContact}
              onChange={handleChange}
            />
            {errors.clubContact && <span className='text-red-500'>{errors.clubContact.message}</span>}

            <input
              type="text"
              name='clubSlogan'
              placeholder="Enter Club Slogan"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubSlogan')}
              value={clubData.clubSlogan}
              onChange={handleChange}
            />

            <input
              type="text"
              name='clubHeads'
              placeholder="Enter Club Heads"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubHeads', { required: "Club Heads are required" })}
              value={clubData.clubHeads}
              onChange={handleChange}
            />
            {errors.clubHeads && <span className='text-red-500'>{errors.clubHeads.message}</span>}

            <input
              type="text"
              name='clubMentors'
              placeholder="Enter Club Mentors"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubMentors', { required: "Club Mentors are required" })}
              value={clubData.clubMentors}
              onChange={handleChange}
            />
            {errors.clubMentors && <span className='text-red-500'>{errors.clubMentors.message}</span>}

            <input
              type="text"
              name='clubMembers'
              placeholder="Enter Club Members"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubMembers')}
              value={clubData.clubMembers}
              onChange={handleChange}
            />

            <input
              type="text"
              name='clubDesc'
              placeholder="Enter Club Description"
              className='m-2 p-2 border-2 w-[20vw]'
              {...register('clubDesc', { required: "Club Description is required" })}
              value={clubData.clubDesc}
              onChange={handleChange}
            />
            {errors.clubDesc && <span className='text-red-500'>{errors.clubDesc.message}</span>}

            <button type='submit'>Add Club</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddClub
