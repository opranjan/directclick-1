import React from 'react';
import './App.css'
import Homecomponent from './components/Homecomponent';
import Websitecomponent from './components/Websitecomponent';
import Appcomponent from './components/Appcomponent';
import Softwarecomponent from './components/Softwarecomponent';
import Aboutuscomponent from './components/Aboutuscomponent';
import {BrowserRouter , Route ,Routes} from "react-router-dom";
import Helpcomponent from './components/Helpcomponent';







function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homecomponent/>}  />
      <Route exact path="/Website" element={<Websitecomponent/>}  />
      <Route exact path="/app" element={<Appcomponent/>}  />
      <Route exact path="/software" element={<Softwarecomponent/>}  />
      <Route exact path="/about" element={<Aboutuscomponent/>}  />
      <Route exact path="/help" element={<Helpcomponent/>}  />
      </Routes>
    </BrowserRouter>
  
    </>


  );
}

export default App;
