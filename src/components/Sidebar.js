import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48 border border-gray-200'>
      <h1 className='font-semibold hover:bg-gray-200'><Link to={"/"}>🏠 Home</Link></h1>
      <h1 className='font-semibold  hover:bg-gray-200'>🩳 Shorts</h1>
      <h1 className='font-semibold  hover:bg-gray-200'>▶️ Subscriptions</h1>
      <h1 className='font-semibold  hover:bg-gray-200 pt-5'> You ▶ </h1>
      <ul>
        <li className=' hover:bg-gray-200'>🧑‍🦰Your Channel</li>
        <li className=' hover:bg-gray-200'>🕒 History</li>
        <li className=' hover:bg-gray-200'>📃 Playlist</li>
        <li className=' hover:bg-gray-200'>🏃Watch Later</li>
        <li className=' hover:bg-gray-200'>👍Liked Videos</li>
      </ul>
      <h1 className='font-semibold pt-5'>Explore</h1>
      <ul>
        <li className=' hover:bg-gray-200'>🔥Trending</li>
        <li className=' hover:bg-gray-200'>🎶Music</li>
        <li className=' hover:bg-gray-200'>🎮Gaming</li>
        <li className=' hover:bg-gray-200'>🤾‍♂️Sports</li>
        <li className=' hover:bg-gray-200'>🎬Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;