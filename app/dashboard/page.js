
"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import Home from '../components/home';

export default function Dashboard() {
  const [menu, setMenu] = useState('home');

  return (
    <div className="bg-[#F6F7FA] h-screen flex justify-start  ">
      <div className="bg-[#279AFF] py-12 flex flex-col flex-shrink-0">
        <button onClick={() => setMenu('home')} className={`px-6 py-6 ${menu === 'home' ? 'bg-[#147CC9]' : 'bg-transparent'} flex items-center justify-center`}>
          <img className="w-5 h-5" src="/svg/home.svg" alt="home" />
        </button>
        <button onClick={() => setMenu('star')} className="px-6 py-6 flex items-center justify-center focus:bg-[#147CC9]">
          <img className="w-5 h-5" src="/svg/star.svg" alt="star" />
        </button>
        <button onClick={() => setMenu('notification')} className="px-6 py-6 flex items-center justify-center focus:bg-[#147CC9]">
          <img className="w-5 h-5" src="/svg/notification.svg" alt="notification" />
        </button>
        <button onClick={() => setMenu('folder')} className="px-6 py-6 flex items-center justify-center focus:bg-[#147CC9]">
          <img className="w-5 h-5" src="/svg/folder.svg" alt="folder" />
        </button>
        <button onClick={() => setMenu('profile')} className="px-6 py-6 flex items-center justify-center focus:bg-[#147CC9]">
          <img className="w-5 h-5" src="/svg/profile.svg" alt="profile" />
        </button>
      </div>
      {
        menu === 'home' ?
          <Home /> :
          <div className='flex items-center w-full justify-center text-4xl'>
            <h1>Coming soon</h1>
          </div>
      }
    </div>
  )
}

