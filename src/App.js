import React from 'react';
import './assets/css/App.css'
import Home from './containers/Home';
import Aguinaldo from './containers/Aguinaldo';
import Faq from './containers/Faq';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
   <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/Oca-React-App" element={<Home />}></Route>
          <Route path="/Aguinaldo" element={<Aguinaldo />}></Route>
          <Route path="/Faq" element={<Faq />}></Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
