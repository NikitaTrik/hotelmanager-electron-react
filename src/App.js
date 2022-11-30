import React from 'react';
import {Route, Routes} from "react-router-dom";
import "./styles/App.css";
import HotelList from "./pages/HotelList/HotelList";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HotelList/>}/>
    </Routes>
  );
}

export default App;