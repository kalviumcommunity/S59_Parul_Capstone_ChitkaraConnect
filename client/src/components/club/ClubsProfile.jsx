import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import bgImg from '../../assets/bgclubprofile.webp';
import Navbar from '../Navbar';

export default function ClubsProfile() {
  const [club, setClub] = useState(null);
  const [activeTab, setActiveTab] = useState('Members');
  const { clubId } = useParams();

  const fetchData = () => {
    axios.get(`http://localhost:8080/api/club/${clubId}`)
      .then(response => {
        setClub(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [clubId]);

  if (!club) {
    return <div>Loading...</div>;
  }

  const renderHeadMembers = () => {
    const headMembers = club.clubHeads || [];

    return headMembers.map(head => (
      <div key={head.name} className='flex flex-col justify-center items-center text-center'>
        <div className='flex flex-col justify-center items-center'>
          <img src={head.image} alt={head.name} className='w-[10vw] h-[10vw] rounded-full' />
          <p className='text-lg font-semibold'>{head.name}</p>
          <h3 className='text-md font-semibold italic text-gray-700'>{head.role}</h3>
        </div>
      </div>
    ));
  };

  const renderMembers = () => {
    return club.clubMembers && club.clubMembers.map(member => (
      <div key={member.name} className='flex flex-col justify-center items-center text-center mb-6 mt-2'>
        <img src={member.image} alt={member.name} className='w-[10vw] h-[10vw] rounded-full' />
        <p className='text-lg font-semibold'>{member.name}</p>
        <p className='text-sm italic text-gray-700'>{member.department}</p>
      </div>
    ));
  };

  const renderFacultyCoordinators = () => {
    const facultyCoordinators = club.clubMentors || [];

    if (facultyCoordinators.length === 0) {
      return <p>No faculty coordinators found.</p>;
    }

    return (
      <div className='flex justify-center items-center flex-wrap gap-[15%]'>
        {facultyCoordinators.map(mentor => (
          <div key={mentor.name} className='flex flex-col justify-center items-center text-center mb-6 mt-2'>
            <img src={mentor.image} alt={mentor.name} className='w-[10vw] h-[10vw] rounded-full' />
            <p className='text-lg font-semibold'>{mentor.name}</p>
            <p className='text-sm italic text-gray-700'>{mentor.specialty}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderInfoTab = () => {
    switch (activeTab) {
      case 'Members':
        return (
          <div className='p-4'>
            <div className='flex justify-center items-center flex-wrap gap-[15%]'>
              {renderHeadMembers()}
            </div>
            <div className='flex flex-col mx-6 mt-10'>
              <h3 className='text-2xl font-semibold mt-16 text-center underline text-red-500'>CLUB MEMBERS</h3>
              <div className='flex justify-center items-center flex-wrap gap-[15%]'>
                {renderMembers()}
              </div>
            </div>
          </div>
        );
      case 'Faculty Coordinator':
        return (
          <div className='p-4'>
            {renderFacultyCoordinators()}
          </div>
        );
      case 'Events':
        return (
          <div className='p-4'>
            <h2 className='text-xl font-semibold'>Events</h2>
          </div>
        );
      case 'Contacts':
        return (
          <div className='p-4'>
            <h2 className='text-xl font-semibold'>Contacts</h2>
            <p>Email: {club.clubEmail}</p>
            <p>Contact: {club.clubContact}</p>
          </div>
        );
      default:
        return (
          <div className='p-4'>
            <h2 className='text-xl font-semibold'>Invalid Tab</h2>
            <p>Click on one of the tabs to know more about the club.</p>
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='w-[25vw] py-8 flex flex-col gap-4 items-center'>
          <div>
            <img src={club.clubLogo} alt={`${club.clubName} logo`} className='w-[13vw] h-[13vw] p-1 rounded-[50%]' />
          </div>
          <div><h1 className='text-2xl font-bold'>{club.clubName}</h1></div>
        </div>

        <div className='w-[75vw]'>
          <div>
            <img src={bgImg} alt="" className='h-[38vh] w-full' />
          </div>
          <div className='bg-black flex justify-center pt-4'>
            <div className='w-[73vw]'>
              <div className='mt-4 flex justify-around text-lg bg-red-400 h-[7vh] items-center font-medium'>
                <div 
                  onClick={() => setActiveTab('Members')} 
                  className={`px-4 h-full w-full flex items-center justify-center cursor-pointer text-center ${activeTab === 'Members' ? 'bg-white text-black' : ''}`}
                >
                  Members
                </div>
                <div 
                  onClick={() => setActiveTab('Faculty Coordinator')} 
                  className={`px-4 h-full w-full flex items-center justify-center cursor-pointer text-center ${activeTab === 'Faculty Coordinator' ? 'bg-white text-black' : ''}`}
                >
                  Faculty Coordinator
                </div>
                <div 
                  onClick={() => setActiveTab('Events')} 
                  className={`px-4 h-full w-full flex items-center justify-center cursor-pointer text-center ${activeTab === 'Events' ? 'bg-white text-black' : ''}`}
                >
                  Events
                </div>
                <div 
                  onClick={() => setActiveTab('Contacts')} 
                  className={`px-4 h-full w-full flex items-center justify-center cursor-pointer text-center ${activeTab === 'Contacts' ? 'bg-white text-black' : ''}`}
                >
                  Contacts
                </div>
              </div>
              <div className='bg-white'>
                {renderInfoTab()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
