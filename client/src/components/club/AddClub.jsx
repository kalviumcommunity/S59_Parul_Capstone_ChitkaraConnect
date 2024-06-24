import React, { useState } from 'react';
import axios from 'axios';

function AddClub() {
  const [clubData, setClubData] = useState({
    clubName: '',
    clubEmail: '',
    clubContact: '',
    clubSlogan: '',
    clubHeads: '',
    clubMentors: '',
    clubMembers: '',
    clubDesc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubData({
      ...clubData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/clubs', clubData);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting club data:', error);
    }
  };

  return (
    <div>
      <div className='playground w-full flex flex-col justify-center items-center'>
        <h2 className='title p-4'>Add your Club below:</h2>
        <div className='form-container'>
          <form className='form flex flex-col justify-center' onSubmit={handleSubmit}>
            <input type="text" name='clubName' placeholder="Enter Club Name" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubEmail' placeholder="Enter Club Email" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubContact' placeholder="Enter Club Contact" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubSlogan' placeholder="Enter Club Slogan" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubHeads' placeholder="Enter Club Heads" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubMentors' placeholder="Enter Club Mentors" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubMembers' placeholder="Enter Club Members" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <input type="text" name='clubDesc' placeholder="Enter Club Description" className='m-2 p-2 border-2 w-[20vw]' onChange={handleChange}/>
            <button type='submit'>Add Club</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddClub;