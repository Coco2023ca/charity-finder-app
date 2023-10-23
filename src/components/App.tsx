import '../App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx';
import CharityDetail from '../components/CharityDetail.tsx';
import FavouriteCharities from '../components/FavouriteCharities.tsx';
import CharityList from '../components/CharityList.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="/" element={<CharityList />} />
            <Route path="/charity/:id" element={<CharityDetail />} />
            <Route path="/favourite" element={<FavouriteCharities />} />
          <Route path="/error" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;