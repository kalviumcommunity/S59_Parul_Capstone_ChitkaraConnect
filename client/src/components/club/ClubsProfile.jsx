import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import bgImg from '../../assets/bgclubprofile.webp'
import Navbar from '../Navbar'

export default function ClubsProfile() {
  const [club, setClub] = useState(null);
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

  return (
    <>
    <Navbar />
    <div className='flex'>
      <div className='w-[25vw] py-8 flex flex-col gap-4 items-center'>
        <div>
          {club.clubLogo ? (
            <img src={club.clubLogo} alt={`${club.clubName} logo`} className='w-[13vw] h-[13vw] p-1 rounded-[50%]' />
          ) : (
            <div>No Logo Available</div>
          )}
        </div>
        <div><h1 className='text-2xl font-bold'>{club.clubName}</h1></div>
      </div>
      <div className='w-[75vw]'>
        <div>
          <img src={bgImg} alt="" className='h-[38vh] w-full'/>
        </div>
        <p><strong>Email:</strong> {club.clubEmail}</p>
        <p><strong>Contact:</strong> {club.clubContact}</p>
        {club.clubSlogan && <p><strong>Slogan:</strong> {club.clubSlogan}</p>}
        <p><strong>Heads:</strong> {club.clubHeads.map(head => head.name).join(', ')}</p>
        <p><strong>Mentors:</strong> {club.clubMentors.map(mentor => mentor.name).join(', ')}</p>
        <p><strong>Members:</strong> {club.clubMembers.map(member => member.name).join(', ')}</p>
        <p><strong>Description:</strong> {club.clubDesc}</p>
      </div>
    </div>
    </>
  );
}
