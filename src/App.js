import React from 'react';
import {Route, Routes} from "react-router-dom";
import "./styles/App.css";
import HotelCreate from "./pages/HotelCreate/HotelCreate";
import HotelEdit from "./pages/HotelEdit/HotelEdit";
import HotelList from "./pages/HotelList/HotelList";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HotelList/>}/>
      <Route path="/hcreate"  element={<HotelCreate/>}/>
      <Route path="/hotel/:id"  element={<HotelEdit/>}/>
    </Routes>
  );
}

export default App;