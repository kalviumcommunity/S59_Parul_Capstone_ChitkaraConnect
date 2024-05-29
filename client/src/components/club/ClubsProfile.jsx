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

  const renderInfoTab = () => {
    switch (activeTab) {
      case 'Members':
        return (
          <div className='p-4'>
            <div>
              <h3 className='text-lg font-medium'>President</h3>
            </div>

            <div>
              <h3 className='text-lg font-medium'>Vice President</h3>
            </div>
          </div>
        );
      case 'Faculty Coordinator':
        return (
          <div className='p-4'>
            <h2 className='text-xl font-semibold'>Faculty Coordinators</h2>
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
          </div>
        );
      default:
        return (
          <div className='p-4'>
            <h2 className='text-xl font-semibold'>Invalid Tab</h2>
            <p>Click on one of the tabs to know more about club.</p>
          </div>
        )
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
          <div className='bg-black flex justify-center py-4'>
            <div className='w-[73vw]'>
              <div className=' mt-4 flex justify-around text-lg bg-red-400 h-[7vh] items-center font-medium'>
                <div onClick={() => setActiveTab('Members')} className='px-4'>Members</div>
                <div onClick={() => setActiveTab('Faculty Coordinator')} className='px-4'>Faculty Coordinator</div>
                <div onClick={() => setActiveTab('Events')} className='px-4'>Events</div>
                <div onClick={() => setActiveTab('Contacts')} className='px-4'>Contacts</div>
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