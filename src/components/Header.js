import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    //API call

    //DEBOUNCING! make an API call after each key press
    //if the difference between key strokes is less than 200ms DECLINE the API CALL 

    const timer = setTimeout(() => {
      //if already in cache then get suggestions results from here.
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        //else API call
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();

    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1],
    })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-1 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-6 cursor-pointer'
          alt='sidebar menu'
          src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className='h-6 mx-2'
            alt='logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className='col-span-10 items-center text-center justify-center'>
        <div>
          <input
            className='rounded-l-full border border-gray-400 w-1/2 p-2 px-8'
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className='rounded-r-full border border-gray-400 bg-gray-200 px-4 py-2'
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className='bg-white py-2 px-3 items-center text-left w-[30rem] justify-center mx-56 rounded-lg shadow-lg border border-gray-200 absolute'>
            <ul>
              {suggestions.map((s) => <li key={s} className='py-1 font-semibold hover:bg-gray-100'>🔍 {s}</li>)}
            </ul>
          </div>
        )}
      </div>

      <div className='col-span-1 flex justify-end'>
        <img
          className='h-12 p-1'
          alt='user'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFe18tMZ6yL7W8brxOdEIkORiINIUhXgorUiJoDgfK2Vz5Hab9RfLaS6orY7SkaeKTBl4&usqp=CAU"
        />
        <img
          className='h-12 p-1'
          alt='user'
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        />
      </div>
    </div>
  )
}

export default Header;