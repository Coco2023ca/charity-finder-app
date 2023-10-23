import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchResultBar';
import '../App.css'
import backgroundImageURL from '../assets/background-5d85c526.jpg';
import searchImage from '../assets/search-0775f889.svg'
import heardImage from '../assets/heart-9fc34c01.svg'
import charityImage from '../assets/icon-98e2ff09.svg'

const HomePage:React.FC=()=> {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onSearch = (searchTerm: string) => {
    setKeyword(searchTerm);
  }

  const goToHome = () => {
    navigate('/');
  }

  const goToFavourite = () => {
    navigate('/favourite');
  } 
  const bannarImg= {
    backgroundImage: `url(${backgroundImageURL})`,
  }

  return (
    <>
    <nav className="py-6 bg-[#515151] font-ubuntu">
      <div className="container mx-auto items-center justify-around md:flex md:flex-wrap">
      
        <div className="flex justify-center w-full items-center lg:w-14">
          <button onClick={goToHome} >
          <img className="w-10 h-10 mr-3" src={charityImage}></img>
          <span className="self-center text-2xl text-white font-bold whitespace-nowrap">
          Charity Finder
          </span>
          </button>
        </div>
      
      <div className="drop-shadow-md mt-4 px-4 md:my-auto">
        <div className="relative">
          <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3.5">
            <img src={searchImage} className="w-5 h-5"></img>
          </button>
          <SearchBar onSearch={onSearch}/>
        </div>
      </div>
      <div className="flex mt-6 justify-center md:my-auto">
        <a href="/favourite">
          <button onClick={goToFavourite}  className="space-x-2 items-center border-0 rounded-full p-3 bg-white hover:bg-[#E2E2E2] duration-300">
            <div><img src={heardImage} className="w-5 h-5"></img></div>
          </button>
        </a>
      </div>
      
      </div>
    </nav>


    <div className="pb-4">
      <div className="flex items-center justify-center w-full h-96 bg-cover bg-center" style={bannarImg}>
        <span className="text-center font-prompt tracking-wider text-[#F7F7F7] font-bold text-2xl sm:text-5xl">
        Changing The World Through Kindness
        </span>
      </div>
    </div>
    <Outlet context={[keyword, setKeyword]}/> 
    </>
            
  );
}

export default HomePage;