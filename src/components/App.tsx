
import '../App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx';
import CharityDetail from '../components/CharityDetail.tsx';
import FavouriteCharities from '../components/FavouriteCharities.tsx';
import CharityList from '../components/CharityList.tsx';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <nav className="py-6 bg-[#515151] font-ubuntu">
      <div className="container mx-auto items-center justify-around md:flex md:flex-wrap">
      <a href='/'>
        <div className="flex justify-center w-full items-center lg:w-14">
          <img className="w-10 h-10 mr-3" src="/assets/icon-98e2ff09.svg"></img>
          <span className="self-center text-2xl text-white font-bold whitespace-nowrap">
          Charity Finder
          </span>
        </div>
      </a>
      <div className="drop-shadow-md mt-4 px-4 md:my-auto">
        <div className="relative">
          <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3.5">
            <img src="/assets/search-0775f889.svg" className="w-5 h-5"></img>
          </button>
        <input type="text" className="px-4 py-3 border border-gray-300 rounded-md w-full lg:w-[28rem] hover:outline outline-1  outline-[#32C8BB] focus:outline outline-offset-0" placeholder="Find a charity"></input>
        </div>
      </div>
      <div className="flex mt-6 justify-center md:my-auto">
        <a href="/favorites">
          <button className="space-x-2 items-center border-0 rounded-full p-3 bg-white hover:bg-[#E2E2E2] duration-300">
            <div><img src="/assets/heart-9fc34c01.svg" className="w-5 h-5"></img></div>
          </button>
        </a>
      </div>
      </div>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route  path="/" Component={HomePage} />
        <Route  path="/" Component={CharityList} />
        <Route  path="/charity/:id" Component={CharityDetail} />
        <Route  path="/favourite" Component={FavouriteCharities} />
        <Route path="/" Component={NotFoundPage} /> 
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
