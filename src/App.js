import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllPossibilities from './Components/AllPossibilities/AllPossibilities';
import MyFooter from './Components/MyFooter/MyFooter';
import MyHeader from './Components/MyHeader/MyHeader';
import HeaderContent from './Components/HeaderContent/HeaderContent';

function App() {
  return (
    <div className="App">
      <MyHeader />

      <Routes>
        <Route path="possibilities" element={<AllPossibilities />} />
      </Routes>

      <HeaderContent />
      <MyFooter />
    </div>
  );
}

export default App;
