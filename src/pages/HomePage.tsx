//import React, { useState } from 'react';
//import { Outlet, useNavigate } from 'react-router-dom';
//import Search from '../components/SearchResultBar';
import '../App.css'
import backgroundImageURL from '../assets/background-5d85c526.jpg';

const HomePage:React.FC=()=> {
  const bannarImg= {
    backgroundImage: `url(${backgroundImageURL})`,
  }

  return (
    <div className="pb-4">
      <div className="flex items-center justify-center w-full h-96 bg-cover bg-center" style={bannarImg}>
        <span className="text-center font-prompt tracking-wider text-[#F7F7F7] font-bold text-2xl sm:text-5xl">
        Changing The World Through Kindness
        </span>
      </div>
    </div>
            
  );
}

export default HomePage;